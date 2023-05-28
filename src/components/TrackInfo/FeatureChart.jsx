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

const data = [
  {
    feature: "Danceability",
    value: 0.818,
    fullMark: 1,
  },
  {
    feature: "Energy",
    value: 0.705,
    fullMark: 1,
  },
  {
    feature: "Speechiness",
    value: 0.177,
    fullMark: 1,
  },
  {
    feature: "Acousticness",
    value: 0.00836,
    fullMark: 1,
  },
  {
    feature: "Instrumentalness",
    value: 0.00233,
    fullMark: 1,
  },
  {
    feature: "Liveness",
    value: 0.613,
    fullMark: 1,
  },
  // {
  //   feature: "Valence",
  //   value: 0.772,
  //   fullMark: 1,
  // },
];

export default class Example extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
