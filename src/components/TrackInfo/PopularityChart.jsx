import { useRecoilValue } from "recoil";
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

import currentArtistDataState from "../../recoil/atoms/currentArtistDataState";
import { intFormatter } from "../../utils/numberFormatter";

const PopularityChart = () => {
	const currentArtistData = useRecoilValue(currentArtistDataState);
	const tracks = currentArtistData?.tracks;
	return (
		<ResponsiveContainer width="100%" height="100%">
			<ComposedChart
				width={1}
				height={1}
				data={tracks}
				margin={{
					top: 16,
					right: 4,
					bottom: 4,
					left: 16,
				}}
			>
				<CartesianGrid stroke="#bebebe" />
				<XAxis
					dataKey="trackName"
					label="Popularity of Top Tracks"
					tick=""
					scale="band"
				/>
				<YAxis
					type="number"
					// dataKey="popularity.playCount"
					name="Play Count"
					tickFormatter={intFormatter}
				/>
				<Tooltip cursor={{ strokeDasharray: "3 3" }} />
				<Area
					dataKey="popularity.playCount"
					name="play counts"
					type="monotone"
					fill="#148255"
					stroke="#148255"
					dot={true}
				/>
				<Bar
					dataKey="popularity.youtubeViews"
					name="youtube views"
					barSize={20}
					fill="#93ffd4"
				/>
			</ComposedChart>
		</ResponsiveContainer>
	);
};

export default PopularityChart;
