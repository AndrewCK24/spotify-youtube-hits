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
	return artist;
};

export const fetchDbByArtistId = (currentArtistID, dbData) => {
	return dbData.filter((track) => track.artistId === currentArtistID);
};

export const fetchDbByArtistName = (input, dbData) => {
	if (!input) {
		return [];
	}
	const artists = [];
	const trackNames = new Set();

	dbData.map((track) => {
		const artistNameLower = track.artistName.toLowerCase();
		const inputLower = input.toLowerCase();
		artistNameLower.split(" ").map((word) => {
			if (word.startsWith(inputLower)) {
				if (!trackNames.has(artistNameLower)) {
					artists.push(track);
					trackNames.add(artistNameLower);
				}
			}
		});
	});

	return artists.slice(0, 12);
};
