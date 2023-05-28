import styled from "@emotion/styled";

import TrackDetail from "./TrackInfo/TrackDetail";
import PopularityChart from "./TrackInfo/PopularityChart";
import FeatureChart from "./TrackInfo/FeatureChart";

const Container = styled.main`
	max-width: 49rem;
	min-width: 37rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
  grid-row-gap: 1.5rem;
`;

const LeftContainer = styled.div`
  max-width: 24rem;
  min-width: 18rem;
	grid-column: 1 / 2;
	display: grid;
`;

const RightContainer = styled.div`
  max-width: 24rem;
  min-width: 18rem;
	grid-column: 2 / 3;
	display: grid;
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
      <TrackDetail />
			<LeftContainer>
				<ChartContainer>
					<PopularityChart />
				</ChartContainer>
			</LeftContainer>
			<RightContainer>
				<ChartContainer>
					<FeatureChart />
				</ChartContainer>
			</RightContainer>
		</Container>
	);
};

export default TrackInfo;
