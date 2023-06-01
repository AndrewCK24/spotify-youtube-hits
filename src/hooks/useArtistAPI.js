// import { useRecoilState } from "recoil";
// import currentArtistDataState from "../recoil/atoms/currentArtistDataState";

export const fetchSpArtist = async (artistId, token) => {
	const response = await fetch(
		`https://api.spotify.com/v1/artists/${artistId}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	const { name, external_urls, images, followers, popularity } = data;
	const artist = {
		name,
		url: external_urls.spotify,
		img: images[0].url,
		followers: followers.total,
		popularity,
	};
	console.log("Artist:", artist);
	return artist;
};

const list = [
	{ id: "0d28khcov6AiegSCpG5TuT", name: "Feel Good Inc." },
	{ id: "7yMiX7n9SBvadzox8T5jzT", name: "Clint Eastwood" },
	{ id: "1foMv2HQwfQ2vntFf9HFeG", name: "Rhinestone Eyes" },
	{ id: "0q6LuUqGLUiCPP1cbdwFs3", name: "On Melancholy Hill" },
	{ id: "4Hff1IjRbLGeLgFgxvHflk", name: "DARE" },
	{ id: "3lIxtCaROdRDuTnNBDm3n2", name: "She's My Collar (feat. Kali Uchis)" },
];

export const fetchDbArtist = async () => {
	const response = new Promise((resolve) => {
		setTimeout(() => {
			resolve(list);
		}, 0);
	});
	const data = await response;
	return data;
};
