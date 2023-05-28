import styled from "@emotion/styled";

import TrackDetail from "./TrackInfo/TrackDetail";
import PopularityChart from "./TrackInfo/PopularityChart";
import FeatureChart from "./TrackInfo/FeatureChart";

const Container = styled.main`
	max-width: 49rem;
	min-width: 37rem;
	height: 95%;
	padding: 2.5% 0;
	overflow: hidden;
	display: grid;
	grid-template-rows: auto auto 1fr;
	grid-row-gap: 1.5rem;
`;

const ChartSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
`;

const ChartContainer = styled.div`
	max-width: 24rem;
	min-width: 18rem;
	min-height: 18rem;
	max-height: 20rem;
	display: grid;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
`;

const TrackInfo = () => {
	return (
		<Container>
			<TrackDetail />
			<ChartSection>
				<ChartContainer>
					<PopularityChart />
				</ChartContainer>
				<ChartContainer>
					<FeatureChart />
				</ChartContainer>
			</ChartSection>
		</Container>
	);
};

export default TrackInfo;
