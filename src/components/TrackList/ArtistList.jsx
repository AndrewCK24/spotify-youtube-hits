import styled from "@emotion/styled";

const Container = styled.div`
	border-radius: 1rem;
	display: flex;
	flex-direction: row;
  /* grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
	grid-column-gap: 0.5rem; */
  align-items: center;
	justify-content: space-between;
	overflow: hidden;
	padding: 0.75rem;
	background-color: var(--black-secondary);
`;

const Artist = styled.a`
	display: grid;
  grid-template-rows: auto 1fr;
	align-items: center;
  justify-content: center;
	text-decoration: none;
	&:hover {
		color: var(--white-primary);
		text-decoration: none;
	}
`;

const ArtistImage = styled.img`
	max-width: 5rem;
	max-height: 5rem;
	border-radius: 50%;
`;

const ArtistName = styled.div`
	font-size: 1rem;
	color: var(--white-secondary);
  text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const artistData = [
	{
		img: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
		name: "Pitbull",
	},
	{
		img: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
		name: "Pitbull",
	},
	{
		img: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
		name: "Pitbull",
	},
];

const ArtistList = () => {
	return (
		<Container>
			{artistData.map((artist, id) => (
				<Artist id={id} href="#">
					<ArtistImage src={artist.img} alt={artist.name} />
					<ArtistName>{artist.name}</ArtistName>
				</Artist>
			))}
		</Container>
	);
};

export default ArtistList;
