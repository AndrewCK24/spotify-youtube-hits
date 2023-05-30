import { atom } from "recoil";

const currentArtistDataState = atom({
  key: "currentArtistDataState",
  default: {},
});

export default currentArtistDataState;
