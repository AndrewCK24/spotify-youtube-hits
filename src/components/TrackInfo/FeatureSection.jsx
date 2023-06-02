import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

import currentArtistDataState from "../../recoil/atoms/currentArtistDataState";
import currentTrackKeyState from "../../recoil/atoms/currentTrackKeyState";
import numberFormatter from "../../utils/numberFormatter";

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

const data = [
	{
		name: "Feel Good Inc.",
		spotifyPlayCount: 1099787791,
		spotifyPopularity: 85,
		youtubeViews: 693555221,
		youtubeLikes: 6220896,
		youtubeComments: 169907,
	},
	{
		name: "Clint Eastwood",
		spotifyPlayCount: 648976189,
		spotifyPopularity: 72,
		youtubeViews: 618480958,
		youtubeLikes: 6197318,
		youtubeComments: 155930,
	},
	{
		name: "Rhinestone Eyes",
		spotifyPlayCount: 337684069,
		spotifyPopularity: 80,
		youtubeViews: 72011645,
		youtubeLikes: 1079128,
		youtubeComments: 31003,
	},
	{
		name: "On Melancholy Hill",
		spotifyPlayCount: 459395657,
		spotifyPopularity: 79,
		youtubeViews: 211754952,
		youtubeLikes: 1788577,
		youtubeComments: 55229,
	},
	{
		name: "DARE",
		spotifyPlayCount: 342909912,
		spotifyPopularity: 77,
		youtubeViews: 259021161,
		youtubeLikes: 1844658,
		youtubeComments: 72008,
	},
	{
		name: "She's My Collar (feat. Kali Uchis)",
		spotifyPlayCount: 172619797,
		spotifyPopularity: 75,
		youtubeViews: 1010982,
		youtubeLikes: 17675,
		youtubeComments: 260,
	},
];

const FeatureSection = () => {
	const likesStr = numberFormatter(data[0].youtubeLikes);
	const viewsStr = numberFormatter(data[0].youtubeViews);

	return (
		<Container>
			<FeatureContainer>
				<Title>YouTube Likes</Title>
				<Number>{likesStr}</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>YouTube Views</Title>
				<Number>{viewsStr}</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Duration</Title>
				<Number>3:30</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Tempo (bpm)</Title>
				<Number>120</Number>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Valence</Title>
				<Number>0.772</Number>
			</FeatureContainer>
		</Container>
	);
};

export default FeatureSection;
