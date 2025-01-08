
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import LabelledSlider from "./LabelledSlider";
import getColor, { getColorWithTransparency } from "@/utility/getBiasColor";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const MemoryGraphSlider = () => {
	const pointCount = 50;
	const [bias, setBias] = useState(1);

	const onBiasChange = (newValue: number) => {
		setBias(newValue);
	}

	const generateData = (formula: (x: number) => number, points: number[]) => {
		return points.map(formula);
	}

	const formula = (x: number) => (1 - bias) * x * 5 + 5;

	const yPoints = generateData(formula, Array.from({ length: pointCount }, (_, i) => i));

	const data = {
		labels: Array.from({ length: pointCount }, (_, i) => i),
		datasets: [
			{
				data: yPoints,
				fill: true,
				backgroundColor: getColorWithTransparency(bias, 0.2),
				borderColor: getColor(bias),
				borderWidth: 3,
				tension: 0.1,
			},
		],
	};

	const options = {
		responsive: true,
		animation: {
			duration: 0,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			}
		},
		elements: {
			point: {
				radius: 0,
				hoverRadius: 0,
			},
		},
		scales: {
			x: {
				ticks: {
					display: false,
				},
				grid: {
					display: false,
				},
				title: {
					display: true,
					color: 'var(--off-black)',
					text: "Group Size",
					font: {
						size: 16,
						weight: 600,
					},
				},
				border: {
					color: 'var(--off-black)',
					width: 5,
				}
			},
			y: {
				min: 0,
				max: 265,
				ticks: {
					display: false,
				},
				grid: {
					display: false,
				},
				title: {
					display: true,
					color: 'var(--off-black)',
					text: "Traits to Remember",
					font: {
						size: 16,
						weight: 600,
					},
				},
				border: {
					color: 'var(--off-black)',
					width: 5,
				}
			},
		},
	}

	return (
		<div className="PlayableContainer">
			<div className="Playable" style={{ maxWidth: '1000px' }}>
				<Line data={data} options={options} />
				<LabelledSlider type="bias" onChange={onBiasChange} value={bias} />
				<p>For example, if there was a group of 50 people,
					and you wanted to remember 5 traits per person,
					you would, with your current level of bias, want to remember <b>{Math.ceil((1 - bias) * 49 * 5 + 5)}</b> traits.</p>
				<p>Simply grouping everyone together as having 5 traits would
					be <b>{(Math.ceil((1 - bias) * 49 * 5 + 5) / 5).toFixed(1)}x</b> less information that you'd need to remember.</p>
			</div>
		</div>);
};

export default MemoryGraphSlider;