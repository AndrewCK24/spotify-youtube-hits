import styled from "@emotion/styled";

const Container = styled.div`
	@keyframes aniHorizontal {
		0% {
			background-position: -100% 0;
		}

		100% {
			background-position: 100% 0;
		}
	}
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		animation-name: aniHorizontal;
		animation-duration: 3.5s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		background: linear-gradient(to right, #cccccc 2%, #666666 18%, #cccccc 33%);
		background-size: 50%;
	}
`;

const Skeleton = () => {
	return <Container />;
};

export default Skeleton;
