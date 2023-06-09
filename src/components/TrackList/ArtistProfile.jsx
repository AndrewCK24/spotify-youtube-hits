import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import currentArtistDataState from "../../recoil/atoms/currentArtistDataState";

// import Skeleton from "../misc/Skeleton";
import { BsPersonCircle } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { FaAssistiveListeningSystems, FaTemperatureHigh } from "react-icons/fa";

const Container = styled.div`
	max-height: 7rem;
	min-height: 5rem;
	border-radius: 1rem;
	background-color: var(--black-secondary);
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
`;

const ArtistImg = styled.img`
	width: 5.75rem;
	height: 5.75rem;
	border-radius: 50%;
	object-fit: cover;
`;

const ArtistImgPlaceholder = styled(BsPersonCircle)`
	max-width: 6rem;
	min-width: 4rem;
	max-height: 6rem;
	min-height: 4rem;
	color: var(--white-secondary);
`;

const ArtistInfo = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	grid-row-gap: 0.25rem;
	overflow: hidden;
`;

const Name = styled.a`
	font-size: 2rem;
	font-weight: 700;
	color: var(--white-primary);
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		text-shadow: 0 0 0.5rem var(--white-primary);
	}
`;

const Details = styled.div`
	display: grid;
	align-items: start;
`;

const Text = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;
	font-size: 0.75rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ArtistProfile = () => {
	const currentArtistData = useRecoilValue(currentArtistDataState);
	const { name, url, img, followers, popularity } = currentArtistData;

	if (Object.keys(currentArtistData).length !== 0) {
		return (
			<Container>
				<ArtistImg src={img} alt={name + " profile picture"} />
				<ArtistInfo>
					<Name href={url}>{name}</Name>
					<Details>
						<Text>
							<RiUserFollowFill />
							{followers} followers
						</Text>
						<Text>
							<FaAssistiveListeningSystems />
							{29865553} (monthly)
						</Text>
						<Text>
							<FaTemperatureHigh />
							Popularity: {popularity}
						</Text>
					</Details>
				</ArtistInfo>
			</Container>
		);
	} else {
		return (
			<Container>
				<ArtistImgPlaceholder />
				{/* <Skeleton /> */}
			</Container>
		);
	}
};

export default ArtistProfile;
