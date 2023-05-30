import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useArtist } from "react-spotify-api";

import ArtistProfile from "./TrackList/ArtistProfile";
import TopTracks from "./TrackList/TopTracks";
import ArtistList from "./TrackList/ArtistList";

const Container = styled.nav`
	max-width: 24rem;
	min-width: 18rem;
	height: 95%;
	padding: 2.5% 0;
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-row-gap: 1rem;
	overflow: hidden;
`;

const TrackList = () => {
	// // TODO: 解決 useArtist() 多次重覆 render 的問題
	// // TODO: 解決 img 無法正常顯示的問題
	// const { data, loading, error } = useArtist("3AA28KZvwAUcZuOKwyblJQ");
	
	// let artistData = {};

	// useEffect(() => {
	// 	if (data) {
	// 		console.log("Artist:", data);
	// 		const fetchedData = {
	// 			name: data.name,
	// 			url: data.external_urls.spotify,
	// 			image: data.images[0].url,
	// 			genres: data.genres,
	// 			popularity: data.popularity,
	// 			followers: data.followers.total,
	// 		};
	// 		artistData = fetchedData;
	// 	}
	// }, [data]);

	return (
		<Container>
			<ArtistProfile />
			<TopTracks />
			<ArtistList />
		</Container>
	);
};

export default TrackList;
