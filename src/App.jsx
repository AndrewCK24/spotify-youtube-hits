import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

// import shared states
import dbDataState from "./recoil/atoms/dbDataState";
import tokenState from "./recoil/atoms/tokenState";
import currentArtistIDState from "./recoil/atoms/currentArtistIDState";
import currentArtistDataState from "./recoil/atoms/currentArtistDataState";
import currentTrackKeyState from "./recoil/atoms/currentTrackKeyState";
import currentTrackDataState from "./recoil/atoms/currentTrackDataState";

import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";
import { fetchSpArtist, fetchDbByArtistId } from "./hooks/useArtistAPI";
import { fetchSpTrackFeatures, fetchSpTrackInfo } from "./hooks/useTrackAPI";

const REACT_APP_CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const REACT_APP_CLIENT_SECRET = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;

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
	const navigate = useNavigate();
	// load shared states
	const dbData = useRecoilValue(dbDataState);
	const [token, setToken] = useRecoilState(tokenState);
	const [currentArtistID, setCurrentArtistID] =
		useRecoilState(currentArtistIDState);
	const setCurrentArtistData = useSetRecoilState(currentArtistDataState);
	const [currentTrackKey, setCurrentTrackKey] =
		useRecoilState(currentTrackKeyState);
	const setCurrentTrackData = useSetRecoilState(currentTrackDataState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = await fetchToken(
					REACT_APP_CLIENT_ID,
					REACT_APP_CLIENT_SECRET
				);
				// 設定 token, currentArtistID
				setToken(token);
				setCurrentArtistID("5Dl3HXZjG6ZOWT5cV375lk");
			} catch (error) {
				console.log("Error:", error);
			}
		};

		fetchData();
	}, [setToken]);

	useEffect(() => {
		navigate(`/${currentArtistID}`);
		if (token) {
			(async () => {
				const [artist, tracks] = await Promise.all([
					fetchSpArtist(currentArtistID, token),
					fetchDbByArtistId(currentArtistID, dbData),
				]);
				const artistData = { ...artist, tracks: tracks };
				setCurrentArtistData(artistData);
				console.log("ArtistData:", artistData);
				setCurrentTrackKey(0);
				const [trackInfo, trackFeatures] = await Promise.all([
					fetchSpTrackInfo(tracks[currentTrackKey].trackId, token),
					fetchSpTrackFeatures(tracks[currentTrackKey].trackId, token),
				]);
				const trackData = { ...trackInfo, features: trackFeatures };
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
