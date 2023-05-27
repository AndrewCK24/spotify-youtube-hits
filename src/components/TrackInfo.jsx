import styled from "@emotion/styled";

import PopularityChart from "./TrackInfo/PopularityChart";
import FeatureChart from "./TrackInfo/FeatureChart";

const Container = styled.main`
	max-width: 49rem;
	min-width: 37rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
`;

const ChartContainer = styled.div`
	min-height: 18rem;
	display: grid;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
`;

const TrackInfo = () => {
	return (
		<Container>
			<ChartContainer>
				<PopularityChart />
			</ChartContainer>
			<ChartContainer>
				<FeatureChart />
			</ChartContainer>
		</Container>
	);
};

export default TrackInfo;
