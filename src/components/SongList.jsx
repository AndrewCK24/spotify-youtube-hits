import styled from "@emotion/styled";

import ArtistProfile from "./SongList/ArtistProfile";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	div {
		border-radius: 1rem;
	}
`;

const SongList = () => {
	return (
		<Container>
			<ArtistProfile />
		</Container>
	);
};

export default SongList;
