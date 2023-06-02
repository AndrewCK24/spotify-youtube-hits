import { PureComponent } from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const dbRescale = (val) => (val + 60) / 60;

const data = [
	{
		feature: "Acousticness",
		value: 0.00836,
	},
	{
		feature: "Danceability",
		value: 0.818,
	},
	{
		feature: "Energy",
		value: 0.705,
	},
	{
		feature: "Instrumentalness",
		value: 0.00233,
	},
	{
		feature: "Liveness",
		value: 0.613,
	},
	{
		feature: "Loudness",
		value: dbRescale(-5.484),
	},
	{
		feature: "Speechiness",
		value: 0.177,
	},
	{
		feature: "Valence",
		value: 0.772,
	},
];

export default class Example extends PureComponent {
	render() {
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
	}
}
