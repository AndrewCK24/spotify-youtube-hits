import timeFormatter from "../utils/timeFormatter";

export const fetchSpTrackInfo = async (trackId, token) => {
	const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	const { name, external_urls, album, duration_ms } = data;
	const track = {
		name,
		url: external_urls.spotify,
		albumName: album.name,
		albumImg: album.images[0].url,
		albumUrl: album.external_urls.spotify,
		albumReleaseDate: album.release_date.split("-")[0],
		duration: timeFormatter(duration_ms),
	};
	console.log("trackData", track);
	return track;
};
