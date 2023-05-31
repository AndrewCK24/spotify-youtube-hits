import { atom } from "recoil";

const currentTrackKeyState = atom({
	key: "currentTrackKeyState",
	default: 0,
});

export default currentTrackKeyState;
