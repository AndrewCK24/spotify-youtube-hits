import styled from "@emotion/styled";

import ArtistProfile from "./SongList/ArtistProfile";
import TopTracks from "./SongList/TopTracks";

const Container = styled.nav`
  max-width: 24rem;
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-row-gap: 1rem;
	overflow: hidden;
`;

const Box = styled.div`
	height: 6rem;
`;

const SongList = () => {
	return (
		<Container>
			<ArtistProfile />
			<TopTracks />
			<Box />
		</Container>
	);
};

export default SongList;
