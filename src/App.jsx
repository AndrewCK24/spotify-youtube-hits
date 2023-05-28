import styled from "@emotion/styled";

import TrackList from "./components/TrackList";
import TrackInfo from "./components/TrackInfo";

const Container = styled.div`
	width: 90%;
	height: 100vh;
	display: grid;
	padding: 0 5%;
	overflow: hidden;
	grid-template-columns: 1fr 3fr;
	grid-column-gap: 1rem;
	align-items: center;
	background-color: var(--black-primary);
`;

const App = () => {
	return (
		<Container>
			<TrackList />
			<TrackInfo />
		</Container>
	);
};

export default App;
