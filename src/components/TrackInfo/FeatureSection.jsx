import styled from "@emotion/styled";

const Container = styled.section`
	grid-row: 3 / 4;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: left;
	align-items: top;
`;

const FeatureContainer = styled.div`
	max-width: 16rem;
	min-width: 12rem;
	max-height: 12rem;
	min-height: 8rem;
	display: grid;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
`;

const Title = styled.div`
	font-size: 1rem;
	font-weight: 400;
	position: relative;
	top: 0.5rem;
	left: 0.5rem;
`;

const Number = styled.div`
	font-size: 4rem;
	font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureSection = () => {
	return (
		<Container>
			<FeatureContainer>
				<Title>Tempo (bpm)</Title>
        <Number>120</Number>
			</FeatureContainer>
			<FeatureContainer>
        <Title>Duration</Title>
        <Number>3:30</Number>
      </FeatureContainer>
		</Container>
	);
};

export default FeatureSection;
