import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

import currentArtistDataState from "../../recoil/atoms/currentArtistDataState";
import currentTrackDataState from "../../recoil/atoms/currentTrackDataState";
import currentTrackKeyState from "../../recoil/atoms/currentTrackKeyState";
import { intFormatter } from "../../utils/numberFormatter";
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaItunesNote } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

const Container = styled.section`
	grid-row: 3 / 4;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: left;
	align-items: stretch;
`;

const FeatureContainer = styled.div`
	flex: 1 1 12rem;
	max-height: 12rem;
	min-height: 8rem;
	display: grid;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	gap: 0.25rem;
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

const pitchNames = [
	"C",
	"C♯",
	"D",
	"D♯",
	"E",
	"F",
	"F♯",
	"G",
	"G♯",
	"A",
	"A♯",
	"B",
];
const pitchConverter = (val) => {
	if (val === -1 || val === null) return null;
	return pitchNames[val];
};

const FeatureSection = () => {
	const currentArtistData = useRecoilValue(currentArtistDataState);
	const currentTrackData = useRecoilValue(currentTrackDataState);
	const currentTrackKey = useRecoilValue(currentTrackKeyState);

	const tracks = currentArtistData?.tracks;
	const popularity = tracks[currentTrackKey]?.popularity;
	const features = currentTrackData?.features;

	return (
		<Container>
			<FeatureContainer>
				<Title>YouTube Likes<AiFillLike /></Title>
				<Number>{intFormatter(popularity?.youtubeLikes)}</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>YouTube Comments<MdInsertComment /></Title>
				<Number>{intFormatter(popularity?.youtubeComments)}</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Pitch<FaItunesNote /></Title>
				<Number>{pitchConverter(features?.key)}</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Tempo (bpm)<TbActivityHeartbeat /></Title>
				<Number>{intFormatter(features?.tempo)}</Number>
			</FeatureContainer>
		</Container>
	);
};

export default FeatureSection;
