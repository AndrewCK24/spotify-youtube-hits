import styled from "@emotion/styled";

const Container = styled.div`
	border-radius: 1rem;
	display: grid;
	grid-template-rows: auto 1fr;
	align-items: center;
	overflow: hidden;
	padding: 0.75rem;
	background-color: var(--black-secondary);
`;

const TrackContainer = styled.div`
	display: grid;
`;

const Track = styled.button`
	color: var(--white-primary);
	background-color: transparent;
	border: none;
	text-align: left;
	padding: 0.5rem 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover,
	&.toggled {
		text-shadow: 0 0 0.5rem var(--white-primary);
		font-weight: 700;
		cursor: pointer;
	}
`;

const trackData = [
	"Feel Good Inc.",
	"Clint Eastwood",
	"Rhinestone Eyes",
	"On Melancholy Hill",
	"DARE",
	"She's My Collar (feat. Kali Uchis)",
];

const TopTracks = () => {
	return (
		<Container>
			<TrackContainer>
				{trackData.map((song, id) => (
					<Track id={id}>{song}</Track>
				))}
			</TrackContainer>
		</Container>
	);
};

export default TopTracks;
