const fetchSpArtist = async (artistId, token) => {
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
