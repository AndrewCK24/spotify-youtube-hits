import styled from "@emotion/styled";

const Container = styled.div`
  border-radius: 1rem;
	display: grid;
  /* grid-template-rows:; */
  align-items: center;
  overflow: hidden;
  padding: 0.75rem;
	background-color: var(--black-secondary);
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
	&:hover {
		text-shadow: 0 0 0.5rem var(--primary-white);
		font-weight: 700;
	}
`;

const trackData = [
	"Timber",
	"I Know You Want Me (Calle Ocho)",
	"Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)",
	"Feel This Moment (feat. Christina Aguilera)",
	"Rain Over Me (feat. Marc Anthony)",
	"Hotel Room Service",
	"Hey Baby (Drop It to the Floor) [feat. T-Pain]",
	"International Love (feat. Chris Brown)",
	"Don't Stop the Party (feat. TJR)",
	"Fireball (feat. John Ryan)",
];

const TopTracks = () => {
	return (
		<Container>
			{trackData.map((song, id) => (
				<Track id={id}>{song}</Track>
			))}
		</Container>
	);
};

export default TopTracks;
