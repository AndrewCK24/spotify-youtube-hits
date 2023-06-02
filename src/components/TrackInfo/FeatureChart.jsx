import { useRecoilValue } from "recoil";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import currentTrackDataState from "../../recoil/atoms/currentTrackDataState";

const dbRescale = (val) => ((val + 60) / 60).toFixed(3);

const FeatureChart = () => {
	const currentTrackData = useRecoilValue(currentTrackDataState);
	const features = currentTrackData?.features;
	const data = [
		{
			feature: "Acousticness",
			value: features?.acousticness,
		},
		{
			feature: "Danceability",
			value: features?.danceability,
		},
		{
			feature: "Energy",
			value: features?.energy,
		},
		{
			feature: "Instrumentalness",
			value: features?.instrumentalness,
		},
		{
			feature: "Liveness",
			value: features?.liveness,
		},
		{
			feature: "Loudness",
			value: dbRescale(features?.loudness),
		},
		{
			feature: "Speechiness",
			value: features?.speechiness,
		},
		{
			feature: "Valence",
			value: features?.valence,
		},
	];
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart
				width={1}
				height={1}
				cx="50%"
				cy="50%"
				outerRadius="80%"
				data={data}
				fullMark={1}
			>
				<PolarGrid />
				<PolarAngleAxis dataKey="feature" />
				<PolarRadiusAxis />
				<Tooltip />
				<Radar
					name="value"
					dataKey="value"
					stroke="#1db954"
					fill="#1db954"
					fillOpacity={0.6}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default FeatureChart;
