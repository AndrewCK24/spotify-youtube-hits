import { useEffect } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import tokenState from "./recoil/atoms/tokenState";
import currentArtistIDState from "./recoil/atoms/currentArtistIDState";
import currentArtistDataState from "./recoil/atoms/currentArtistDataState";

import passKeys from "./env";
import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";

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
	// console.log("Access Token:", data.access_token);
	return data.access_token;
};

const fetchArtist = async (artistId, token) => {
	const response = await fetch(
		`https://api.spotify.com/v1/artists/${artistId}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	console.log("Artist:", data);
	return data;
};

const App = () => {
	const [token, setToken] = useRecoilState(tokenState);
	const [currentArtistID, setCurrentArtistID] =
		useRecoilState(currentArtistIDState);
	const [currentArtistData, setCurrentArtistData] = useRecoilState(
		currentArtistDataState
	);

	useEffect(() => {
		const clientId = REACT_APP_CLIENT_ID;
		const clientSecret = REACT_APP_CLIENT_SECRET;
		fetchToken(clientId, clientSecret)
			.then((token) => {
				setToken(token);
				// setCurrentArtist("3AA28KZvwAUcZuOKwyblJQ");
				console.log("Access Token:", token);
			})
			.catch((err) => console.log("Error when accessing token:", err));
	}, [setToken]);

	useEffect(() => {
		if (token) {
			fetchArtist(currentArtistID, token)
				.then((data) => {
					setCurrentArtistData(data);
					console.log("Artist:", data);
				})
				.catch((err) => console.log("Error when fetching artist:", err));
		}
	}, [currentArtistID, token]);

	return (
		<Container>
			<TrackList />
			<TrackInfo />
		</Container>
	);
};

export default App;
