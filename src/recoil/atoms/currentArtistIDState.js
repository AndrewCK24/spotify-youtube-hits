import { atom } from "recoil";

const currentArtistIDState = atom({
	key: "currentArtistIDState",
	default: "",
});

export default currentArtistIDState;
