import { atom } from "recoil";

const currentArtistDataState = atom({
	key: "currentArtistDataState",
	default: {
		name: "",
		url: "",
		img: "",
		followers: 0,
		popularity: 0,
		tracks: [],
	},
});

export default currentArtistDataState;
