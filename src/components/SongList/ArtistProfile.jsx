import styled from "@emotion/styled";

const Container = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 1rem;
  background-color: var(--black-secondary);
	display: flex;
	flex-direction: row;
	align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const ArtistImage = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
`;

const ArtistDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
`;

const Name = styled.a`
	font-size: 2rem;
  font-weight: 700;
  color: var(--white-primary);
  text-decoration: none;
  &:hover {
    color: var(--white-secondary);
  }
`;

const Followers = styled.div`
	font-size: 1rem;
`;

const MonthlyListeners = styled.div`
	font-size: 1rem;
`;

const Popularity = styled.div`
	font-size: 1rem;
`;

const ArtistProfile = () => {
	const artistData = {
		img: "https://i.scdn.co/image/ab6761610000e5ebfc9d2abc85b6f4bef77f80ea",
		name: "Pitbull",
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
			<ArtistDetails>
				<Name>{artistData.name}</Name>
				<Followers>
          {artistData.followers.toLocaleString()} followers
        </Followers>
				<MonthlyListeners>
          {artistData.monthlyListeners.toLocaleString()} monthly listeners
        </MonthlyListeners>
				<Popularity>
          Popularity: {artistData.popularity.toLocaleString()}
        </Popularity>
			</ArtistDetails>
		</Container>
	);
};

export default ArtistProfile;
