import styled from "@emotion/styled";

const Container = styled.div`
	border-radius: 1rem;
	background-color: var(--black-secondary);
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
`;

const ArtistImage = styled.img`
	max-width: 6rem;
	min-width: 4rem;
	max-height: 6rem;
	min-height: 4rem;
	border-radius: 50%;
`;

const ArtistInfo = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
  grid-row-gap: 0.25rem;
	overflow: hidden;
`;

const Name = styled.a`
	font-size: 2rem;
	font-weight: 700;
	color: var(--white-primary);
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		color: var(--white-secondary);
	}
`;

const Details = styled.div`
	font-size: 0.75rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ArtistProfile = () => {
	const artistData = {
		img: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
		name: "Pitbull",
    spotifyUrl: "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg",
		followers: 123456789,
		monthlyListeners: 123456789,
		popularity: 83,
	};

	return (
		<Container>
			<ArtistImage
				src={artistData.img}
				alt={artistData.name + " profile picture"}
			/>
			<ArtistInfo>
				<Name href={artistData.spotifyUrl}>{artistData.name}</Name>
				<Details>
					{artistData.followers.toLocaleString()} followers
					<br />
					{artistData.monthlyListeners.toLocaleString()} monthly listeners
					<br />
					Popularity: {artistData.popularity.toLocaleString()}
					<br />
				</Details>
			</ArtistInfo>
		</Container>
	);
};

export default ArtistProfile;
