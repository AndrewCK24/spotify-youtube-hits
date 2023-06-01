import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

// import shared states
import dbDataState from "./recoil/atoms/dbDataState";
import tokenState from "./recoil/atoms/tokenState";
import currentArtistIDState from "./recoil/atoms/currentArtistIDState";
import currentArtistDataState from "./recoil/atoms/currentArtistDataState";
import currentTrackDataState from "./recoil/atoms/currentTrackDataState";

import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";
import passKeys from "./env";
import { fetchSpArtist, fetchDbArtist } from "./hooks/useArtistAPI";
import { fetchSpTrackInfo } from "./hooks/useTrackAPI";
import { fetchDbData } from "./hooks/useDbData";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = passKeys();

const Container = styled.div`
	width: 90%;
	height: 100vh;
	display: grid;
	padding: 0 5%;
	overflow: hidden;
	grid-template-columns: 1fr 3fr;
	grid-column-gap: 1rem;
	align-items: center;
	background-color: var(--black-primary);
`;

const fetchToken = async (clientId, clientSecret) => {
	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
	});
	const data = await response.json();
	return data.access_token;
};

const App = () => {
	const [dbData, setDbData] = useRecoilState(dbDataState);
	const [token, setToken] = useRecoilState(tokenState);
	const [currentArtistID, setCurrentArtistID] =
		useRecoilState(currentArtistIDState);
	const [currentArtistData, setCurrentArtistData] = useRecoilState(
		currentArtistDataState
	);
	const setCurrentTrackData = useSetRecoilState(currentTrackDataState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// 同時發起兩個非同步請求
				const [dbData, token] = await Promise.all([
					fetchDbData(),
					fetchToken(REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET),
				]);

				// 設定 dbData, token, currentArtistID
				setDbData(dbData);
				setToken(token);
				setCurrentArtistID("3AA28KZvwAUcZuOKwyblJQ");
				console.log("Token:", token);
			} catch (error) {
				console.log("Error:", error);
			}
		};

		fetchData();
	}, [setToken]);

	useEffect(() => {
		if (token) {
			(async () => {
				const [artist, tracks] = await Promise.all([
					fetchSpArtist(currentArtistID, token),
					fetchDbArtist(currentArtistID, dbData),
				]);
				const artistData = { ...artist, tracks: tracks };
				setCurrentArtistData(artistData);
				console.log("ArtistData:", artistData);
				const trackData = await fetchSpTrackInfo(tracks[0].trackId, token);
				setCurrentTrackData(trackData);
				console.log("TrackData:", trackData);
			})();
		}
	}, [currentArtistID]);

	return (
		<Container>
			<TrackList />
			<TrackInfo />
		</Container>
	);
};

export default App;
