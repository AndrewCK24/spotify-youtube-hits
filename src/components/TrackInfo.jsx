import styled from "@emotion/styled";

import TrackDetail from "./TrackInfo/TrackDetail";
import PopularityChart from "./TrackInfo/PopularityChart";
import FeatureChart from "./TrackInfo/FeatureChart";
import FeatureSection from "./TrackInfo/FeatureSection";

const Container = styled.main`
	/* max-width: 49rem; */
	/* min-width: 37rem; */
	height: 95%;
	padding: 2.5% 0;
	overflow-y: scroll;
	display: grid;
	grid-template-rows: auto auto 1fr;
	grid-row-gap: 1.5rem;
`;

const ChartSection = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: left;
	align-items: stretch;
`;

const ChartContainer = styled.div`
	flex: 1 1 18rem;
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
			<FeatureSection />
		</Container>
	);
};

export default TrackInfo;
