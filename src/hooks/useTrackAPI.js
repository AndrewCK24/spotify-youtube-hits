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
		url: external_urls?.spotify,
		albumName: album?.name,
		albumImg: album?.images[0].url,
		albumUrl: album?.external_urls.spotify,
		albumReleaseDate: album?.release_date.split("-")[0],
		duration: timeFormatter(duration_ms),
	};

	return track;
};

export const fetchSpTrackFeatures = async (trackId, token) => {
	const response = await fetch(
		`https://api.spotify.com/v1/audio-features/${trackId}`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	const {
		acousticness,
		danceability,
		energy,
		instrumentalness,
		key,
		liveness,
		loudness,
		mode,
		speechiness,
		tempo,
		time_signature,
		valence,
	} = data;

	const features = {
		acousticness,
		danceability,
		energy,
		instrumentalness,
		key,
		liveness,
		loudness,
		mode,
		speechiness,
		tempo,
		time_signature,
		valence,
	};
	// console.log("trackFeatures:", features);
	return features;
};

// const useTrackAPI = (key, token) => {
// 	const fetchData = async () => {
// 		try {
// 			const [trackInfo, trackFeatures] = await Promise.all([
// 				fetchSpTrackInfo(tracks[key].trackId, token),
// 				fetchSpTrackFeatures(tracks[key].trackId, token),
// 			]);
// 			const trackData = { ...trackInfo, features: trackFeatures };
// 			setCurrentTrackData(trackData);
// 			console.log("TrackData:", trackData);
// 		} catch (error) {
// 			console.log("Error when fetching track data:", error);
// 		}
// 	};

// 	fetchData();
// };
