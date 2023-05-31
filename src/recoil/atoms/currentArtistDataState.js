import { atom } from "recoil";

const currentArtistDataState = atom({
  key: "currentArtistDataState",
  default: {
    name: "",
		url: "",
		img: "",
		followers: 0,
		popularity: 0,
    tracks: [
      {
        name: "",
        id: "",
        playCount: 0,
        // TODO: 補齊其他資訊
      }
    ],
  },
});

export default currentArtistDataState;
