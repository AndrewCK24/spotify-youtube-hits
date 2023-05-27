import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SongList = ({ songs }) => {
	return (
		<Container>
			<h1>Song List</h1>
			<ul>
				{songs.map((song) => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
		</Container>
	);
};

export default SongList;
