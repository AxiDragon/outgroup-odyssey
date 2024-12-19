
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const MemoryGraphSlider = () => {
	const pointCount = 50;
	const [bias, setBias] = useState(0.5);

	const onBiasChange = (newValue: number) => {
		setBias(newValue);
	}

	const generateData = (formula: (x: number) => number, points: number[]) => {
		return points.map(formula);
	}

	const formula = (x: number) => Math.pow(x * bias, 1.2);

	const yPoints = generateData(formula, Array.from({ length: pointCount }, (_, i) => i));

	const data = {
		labels: Array.from({ length: pointCount }, (_, i) => i),
		datasets: [
			{
				data: yPoints,
				fill: false,
				borderColor: `rgb(${bias * 255},0,${(1 - bias) * 255})`,
				borderWidth: 10,
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
		},
		elements: {
			point: {
				radius: 0,
			},
		},
		scales: {
			x: {
				ticks: {
					display: false,
				},
				title: {
					display: true,
					text: "Group Size",
				}
			},
			y: {
				min: -10,
				max: 110,
				ticks: {
					display: false,
				},
				title: {
					display: true,
					text: "Effort to Remember",
				}
			},
		},
	}

	return (<div>
		<Line data={data} options={options} />
		<div>
			<span>No Bias</span>
			<input
				type="range"
				min={0.0}
				max={1.0}
				value={bias}
				step={0.01}
				onChange={(e) => onBiasChange(parseFloat(e.target.value))}
			/>
			<span>Full Bias</span>
		</div>
	</div>);
};

export default MemoryGraphSlider;