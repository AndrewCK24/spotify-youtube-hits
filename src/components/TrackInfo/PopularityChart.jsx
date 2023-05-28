import React, { PureComponent } from "react";
import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Feel Good Inc.",
		spotifyPlayCount: 1099787791,
		spotifyPopularity: 85,
		youtubeViews: 693555221,
		youtubeLikes: 6220896,
		youtubeComments: 169907,
	},
	{
		name: "Clint Eastwood",
		spotifyPlayCount: 648976189,
		spotifyPopularity: 72,
		youtubeViews: 618480958,
		youtubeLikes: 6197318,
		youtubeComments: 155930,
	},
	{
		name: "Rhinestone Eyes",
		spotifyPlayCount: 337684069,
		spotifyPopularity: 80,
		youtubeViews: 72011645,
		youtubeLikes: 1079128,
		youtubeComments: 31003,
	},
	{
		name: "On Melancholy Hill",
		spotifyPlayCount: 459395657,
		spotifyPopularity: 79,
		youtubeViews: 211754952,
		youtubeLikes: 1788577,
		youtubeComments: 55229,
	},
	{
		name: "DARE",
		spotifyPlayCount: 342909912,
		spotifyPopularity: 77,
		youtubeViews: 259021161,
		youtubeLikes: 1844658,
		youtubeComments: 72008,
	},
	{
		name: "She's My Collar (feat. Kali Uchis)",
		spotifyPlayCount: 172619797,
		spotifyPopularity: 75,
		youtubeViews: 1010982,
		youtubeLikes: 17675,
		youtubeComments: 260,
	},
];

const DataFormatter = (number) => {
	if (number > 1000000000) {
		return (number / 1000000000).toString() + "B";
	} else if (number > 1000000) {
		return (number / 1000000).toString() + "M";
	} else if (number > 1000) {
		return (number / 1000).toString() + "K";
	} else {
		return number.toString();
	}
};

export default class Popularity extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 16,
						right: 4,
						bottom: 4,
						left: 4,
					}}
				>
					<CartesianGrid stroke="#bebebe" />
					<XAxis
						xAxisId={0}
						dataKey="name"
						label="Tracks"
						tick=""
						scale="band"
					/>
					<XAxis xAxisId={1} dataKey="name" hide />
					<XAxis xAxisId={2} dataKey="name" hide />
					<YAxis
						yAxisId="left"
						type="number"
						dataKey="spotifyPlayCount"
						name="Play Count"
						tickFormatter={DataFormatter}
					/>
					<YAxis
						yAxisId="right"
						type="number"
						dataKey="spotifyPopularity"
						name="Popularity"
						orientation="right"
					/>
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Area
						yAxisId="left"
						dataKey="spotifyPlayCount"
						type="monotone"
						fill="#148255"
						stroke="#148255"
					/>
					<Bar
						xAxisId={0}
						yAxisId="left"
						dataKey="youtubeViews"
						barSize={20}
						fill="#ff0000"
					/>
					<Line
						yAxisId="right"
						type="monotone"
						dataKey="spotifyPopularity"
						stroke="#1db954"
					/>
					<Bar
						xAxisId={1}
						yAxisId="left"
						dataKey="youtubeLikes"
						barSize={20}
						fill="#b30000"
					/>
					<Bar
						xAxisId={2}
						yAxisId="left"
						dataKey="youtubeComments"
						barSize={20}
						fill="#ff8080"
					/>
				</ComposedChart>
			</ResponsiveContainer>
		);
	}
}
