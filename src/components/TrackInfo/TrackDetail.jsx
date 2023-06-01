import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

import currentTrackKeyState from "../../recoil/atoms/currentTrackKeyState";
import currentTrackDataState from "../../recoil/atoms/currentTrackDataState";
import { RiAlbumLine } from "react-icons/ri";
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";

const Container = styled.section`
	max-height: 9rem;
	min-height: 7.5rem;
	grid-column: 1 / 3;
	background-color: var(--black-secondary);
	border-radius: 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 0.75rem;
	align-items: center;
	overflow: hidden;
	padding: 0.75rem;
`;

const AlbumImg = styled.img`
	max-width: 7.5rem;
	min-width: 4rem;
	max-height: 7.5rem;
	min-height: 4rem;
`;

const DetailContainer = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	grid-gap: 0.5rem;
	a {
		text-decoration: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		&:hover {
			text-decoration: none;
		}
	}
`;

const TrackName = styled.a`
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--white-primary);
	&:hover {
		text-shadow: 0 0 0.5rem var(--white-primary);
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: left;
	align-items: start;
	gap: 0.5rem;
`;

const Info = styled.div`
	flex: 1 1 12rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 0.5rem;
`;

const AlbumName = styled.a`
	flex: 1 1 auto;
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 1rem;
	color: var(--white-secondary);
	&:hover {
		color: var(--white-primary);
	}
`;

const DetailText = styled.div`
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 1rem;
`;

const TrackDetail = () => {
	const currentTrackKey = useRecoilValue(currentTrackKeyState);
	const currentTrackData = useRecoilValue(currentTrackDataState);
	const {
		name,
		url,
		albumName,
		albumImg,
		albumUrl,
		albumReleaseDate,
		duration,
	} = currentTrackData;

	if (Object.keys(currentTrackData).length !== 0) {
		return (
			<Container>
				<AlbumImg src={albumImg} alt={albumName + " album cover"} />
				<DetailContainer>
					<TrackName href={url}>{name}</TrackName>
					<Details>
						<Info>
							<AlbumName href={albumUrl}>
								<RiAlbumLine />
								{albumName}
							</AlbumName>
							<DetailText>
								<MdOutlineDateRange />
								{albumReleaseDate}
							</DetailText>
							<DetailText>
								<MdAccessTime />
								{duration}
							</DetailText>
						</Info>
						<Info>
							<DetailText>
								<MdOutlineDateRange />
								{currentTrackKey}
							</DetailText>
						</Info>
					</Details>
				</DetailContainer>
			</Container>
		);
	} else {
		console.log(Object.keys(currentTrackData))
		return <Container />;
	}
};

export default TrackDetail;
