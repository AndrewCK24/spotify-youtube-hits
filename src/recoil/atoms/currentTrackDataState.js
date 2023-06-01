import { atom } from "recoil";

const currentTrackDataState = atom({
	key: "currentTrackDataState",
	default: {
		name: "",
		url: "",
		albumName: "",
		albumImg: "",
		albumUrl: "",
		albumReleaseDate: "",
		duration: "",
	},
});

export default currentTrackDataState;
