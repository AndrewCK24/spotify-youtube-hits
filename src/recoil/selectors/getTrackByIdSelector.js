import { selector } from "recoil";

import currentArtistDataState from "../atoms/currentArtistDataState";

const getTrackByIdSelector = selector({
	key: "getTrackByIdSelector",
	get:
		({ get }) =>
		({ key }) => {
			const artistData = get(currentArtistDataState);
			return artistData?.Tracks[key] || null;
		},
});

export default getTrackByIdSelector;
