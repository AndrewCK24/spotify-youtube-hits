import styled from "@emotion/styled";

import SongList from "./components/SongList";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--black-primary);
`;

const App = () => {
	return (
		<Container>
			<SongList />
		</Container>
	);
};

export default App;
