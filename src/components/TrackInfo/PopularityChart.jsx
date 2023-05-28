import React, { PureComponent } from "react";
import {
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import numberFormatter from "../../utils/numberFormatter";

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

export default class Popularity extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<ComposedChart
					width={480}
					height={320}
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
						dataKey="name"
						label="Popularity of Top Tracks"
						tick=""
						scale="band"
					/>
					<YAxis
						type="number"
						dataKey="spotifyPlayCount"
						name="Play Count"
						tickFormatter={numberFormatter}
					/>
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Area
						dataKey="spotifyPlayCount"
						type="monotone"
						fill="#148255"
						stroke="#148255"
					/>
					<Bar dataKey="youtubeViews" barSize={20} fill="#ff0000" />
				</ComposedChart>
			</ResponsiveContainer>
		);
	}
}
