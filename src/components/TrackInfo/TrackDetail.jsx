import styled from "@emotion/styled";

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
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 1rem;
	align-items: start;
`;

const AlbumName = styled.a`
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
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-size: 1rem;
`;

const TrackDetail = () => {
	return (
		<Container>
			<AlbumImg
				src="https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf"
				alt="albumName"
			/>
			<DetailContainer>
				<TrackName href="https://open.spotify.com/track/0d28khcov6AiegSCpG5TuT">
					Feel Good Inc.
				</TrackName>
				<Details>
					<AlbumName href="https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT">
						<RiAlbumLine />
						Demon Days
					</AlbumName>
					<DetailText>
						<MdOutlineDateRange />
						2005
					</DetailText>
				</Details>
			</DetailContainer>
		</Container>
	);
};

export default TrackDetail;
