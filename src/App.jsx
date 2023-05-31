import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";

// import global states
import tokenState from "./recoil/atoms/tokenState";
import currentArtistIDState from "./recoil/atoms/currentArtistIDState";
import currentArtistDataState from "./recoil/atoms/currentArtistDataState";

import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";
import passKeys from "./env";

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

const fetchSpArtist = async (artistId, token) => {
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
	const { name, external_urls, images, followers, popularity } = data;
	const artist = {
		name,
		url: external_urls.spotify,
		img: images[0].url,
		followers: followers.total,
		popularity,
	};
	console.log("Artist:", artist);

	return artist;
};
const App = () => {
	const [token, setToken] = useRecoilState(tokenState);
	const [currentArtistID, setCurrentArtistID] =
		useRecoilState(currentArtistIDState);
	const [currentArtistData, setCurrentArtistData] = useRecoilState(
		currentArtistDataState
	);

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
			fetchSpArtist(currentArtistID, token)
				.then((data) => {
					setCurrentArtistData(data);
				})
				.catch((err) => console.log("Error when fetching artist:", err));
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
