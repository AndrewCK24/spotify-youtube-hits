import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SpotifyApiContext } from "react-spotify-api";

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

const App = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const clientId = REACT_APP_CLIENT_ID;
		const clientSecret = REACT_APP_CLIENT_SECRET;
		fetchToken(clientId, clientSecret)
			.then((token) => setToken(token))
			.catch((err) => console.log("Error when accessing token:", err));
	}, []);

	return (
		<SpotifyApiContext.Provider value={token}>
			<Container>
				<TrackList />
				<TrackInfo />
			</Container>
		</SpotifyApiContext.Provider>
	);
};

export default App;
