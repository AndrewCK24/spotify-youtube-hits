import styled from "@emotion/styled";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { fetchSpTrackInfo, fetchSpTrackFeatures } from "../../hooks/useTrackAPI";

import tokenState from "../../recoil/atoms/tokenState";
import currentArtistDataState from "../../recoil/atoms/currentArtistDataState";
import currentTrackKeyState from "../../recoil/atoms/currentTrackKeyState";
import currentTrackDataState from "../../recoil/atoms/currentTrackDataState";

const Container = styled.div`
	border-radius: 1rem;
	display: grid;
	grid-template-rows: auto 1fr;
	align-items: center;
	overflow-y: scroll;
	padding: 0.75rem;
	background-color: var(--black-secondary);
`;

const TrackContainer = styled.div`
	display: grid;
`;

export const Track = styled.button`
	color: var(--white-primary);
	background-color: transparent;
	border: none;
	text-align: left;
	padding: 0.5rem 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover,
	&.toggled {
		text-shadow: 0 0 0.5rem var(--white-primary);
		font-weight: 700;
		cursor: pointer;
	}
`;

const TopTracks = () => {
	const [currentTrackKey, setCurrentTrackKey] =
		useRecoilState(currentTrackKeyState);
	const token = useRecoilValue(tokenState);
	const currentArtistData = useRecoilValue(currentArtistDataState);
	const { tracks } = currentArtistData;
	const setCurrentTrackData = useSetRecoilState(currentTrackDataState);

	const handleClick = async (key) => {
		setCurrentTrackKey(key);
		try {
				const [trackInfo, trackFeatures] = await Promise.all([
					fetchSpTrackInfo(tracks[key].trackId, token),
					fetchSpTrackFeatures(tracks[key].trackId, token),
				]);
				const trackData = { ...trackInfo, features: trackFeatures };
				setCurrentTrackData(trackData);
				console.log("TrackData:", trackData);
		} catch (error) {
			console.log("Error when fetching track data:", error);
		}
	};

	return (
		<Container>
			<TrackContainer>
				{tracks.map((track, id) => (
					<Track
						key={id}
						className={currentTrackKey === id ? "toggled" : ""}
						disabled={currentTrackKey === id}
						onClick={() => handleClick(id)}
					>
						{track.trackName}
					</Track>
				))}
			</TrackContainer>
		</Container>
	);
};

export default TopTracks;
