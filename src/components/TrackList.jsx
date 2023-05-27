import styled from "@emotion/styled";

import ArtistProfile from "./TrackList/ArtistProfile";
import TopTracks from "./TrackList/TopTracks";
import ArtistList from "./TrackList/ArtistList";

const Container = styled.nav`
	max-width: 24rem;
	min-width: 18rem;
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-row-gap: 1rem;
	overflow: hidden;
`;

const TrackList = () => {
	return (
		<Container>
			<ArtistProfile />
			<TopTracks />
			<ArtistList />
		</Container>
	);
};

export default TrackList;
