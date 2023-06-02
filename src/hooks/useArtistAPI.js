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

export const fetchDbByArtistName = (artistName, dbData) => {
  const artists = [];
  const trackNames = new Set();

  for (const track of dbData) {
    if (track.artistName.includes(artistName)) {
      if (!trackNames.has(track.artistName)) {
        artists.push(track);
        trackNames.add(track.artistName);
      }
    }
  }

  return artists;
};