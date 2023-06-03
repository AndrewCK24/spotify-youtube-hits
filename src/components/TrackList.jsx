import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { useRecoilValue, useRecoilState } from "recoil";

import dbDataState from "../recoil/atoms/dbDataState";
import currentArtistIDState from "../recoil/atoms/currentArtistIDState";
import { fetchDbByArtistName } from "../hooks/useArtistAPI";
import SearchBar from "./TrackList/SearchBar";
import { Track as Result } from "./TrackList/TopTracks";
import ArtistProfile from "./TrackList/ArtistProfile";
import TopTracks from "./TrackList/TopTracks";
// import ArtistList from "./TrackList/ArtistList";

const Container = styled.nav`
	max-width: 24rem;
	min-width: 18rem;
	height: 95%;
	padding: 2.5% 0;
	display: grid;
	grid-template-rows: auto 1fr;
	grid-row-gap: 1rem;
	overflow: hidden;
`;

const SearchSwitch = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-row-gap: 1rem;
`;

const SearchResults = styled.div`
	display: grid;
	padding: 0 0.75rem;
`;

const TrackList = () => {
	const navigate = useNavigate();

	const dbData = useRecoilValue(dbDataState);
	const [currentArtistID, setCurrentArtistID] = useRecoilState(currentArtistIDState);
	const [focus, setFocus] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const handleChange = (e) => {
		setSearchResults(fetchDbByArtistName(e.target.value, dbData));
	};
	const handleClick = (id) => {
		setCurrentArtistID(id);
		navigate(`/spotify-youtube-hits/${currentArtistID}`);
		setFocus(false);
	};

	return (
		<Container>
			<SearchBar handleChange={handleChange} focus={focus} setFocus={setFocus} />
			{focus ? (
				<SearchSwitch>
					<SearchResults>
						{
							searchResults.map((result, index) => (
								<Result key={index} onClick={() => handleClick(result.artistId)}>
									{result.artistName}
								</Result>
							))
						}
					</SearchResults>
				</SearchSwitch>
			) : (
				<SearchSwitch>
					<ArtistProfile />
					<TopTracks />
				</SearchSwitch>
			)}
			{/* <ArtistList /> */}
		</Container>
	);
};

export default TrackList;
