import { atom } from "recoil";

const historyState = atom({
	key: "historyState",
	default: [
		{
			artistId: "5Dl3HXZjG6ZOWT5cV375lk",
			artistImg:
				"https://i.scdn.co/image/ab6761610000e5ebfb0fcd51414e7bbe85e00b6f",
		},
	],
});

export default historyState;
