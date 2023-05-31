import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

// import shared states
import tokenState from "./recoil/atoms/tokenState";
import currentArtistIDState from "./recoil/atoms/currentArtistIDState";
import currentArtistDataState from "./recoil/atoms/currentArtistDataState";

import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";
import passKeys from "./env";
import { fetchSpArtist, fetchDbArtist } from "./hooks/useArtistAPI";

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
	const [token, setToken] = useRecoilState(tokenState);
	const [currentArtistID, setCurrentArtistID] =
		useRecoilState(currentArtistIDState);
	const setCurrentArtistData = useSetRecoilState(currentArtistDataState);

	useEffect(() => {
		fetchToken(REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET)
			.then((token) => {
				setToken(token);
				setCurrentArtistID("3AA28KZvwAUcZuOKwyblJQ");
				console.log("Token:", token);
			})
			.catch((err) => console.log("Error when accessing token:", err));
	}, [setToken]);

	useEffect(() => {
		if (token) {
			(async () => {
				const [artist, tracks] = await Promise.all([
					fetchSpArtist(currentArtistID, token),
					fetchDbArtist(),
				]);
				const data = { ...artist, tracks };
				setCurrentArtistData(data);
				console.log("ArtistData:", data);
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
