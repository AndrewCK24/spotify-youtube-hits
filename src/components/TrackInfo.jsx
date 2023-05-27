import styled from "@emotion/styled";

const Container = styled.main`
	max-width: 49rem;
	min-width: 37rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
`;

const ChartContainer = styled.div`
	display: grid;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
`;

const TrackInfo = () => {
	return (
		<Container>
			<ChartContainer>
				<h2>Chart</h2>
			</ChartContainer>
			<ChartContainer>
				<h2>Chart</h2>
			</ChartContainer>
		</Container>
	);
};

export default TrackInfo;
