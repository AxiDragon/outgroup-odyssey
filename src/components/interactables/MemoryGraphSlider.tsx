
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

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

	const formula = (x: number) => Math.pow(x * (1 - bias), 2) + 150;

	const yPoints = generateData(formula, Array.from({ length: pointCount }, (_, i) => i));

	const data = {
		labels: Array.from({ length: pointCount }, (_, i) => i),
		datasets: [
			{
				data: yPoints,
				fill: true,
				backgroundColor: `rgba(${(1 - bias) * 255},0,${bias * 255},0.2)`,
				borderColor: `rgb(${(1 - bias) * 255},0,${bias * 255})`,
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
					color: 'black',
					text: "Group Size",
					font: {
						size: 16,
						weight: 600,
					},
				},
				border: {
					color: 'black',
					width: 5,
				}
			},
			y: {
				min: 0,
				max: 2750,
				ticks: {
					display: false,
				},
				grid: {
					display: false,
				},
				title: {
					display: true,
					color: 'black',
					text: "Effort to Remember",
					font: {
						size: 16,
						weight: 600,
					},
				},
				border: {
					color: 'black',
					width: 5,
				}
			},
		},
	}

	return (<div className="MemoryGraphSlider">
		<Line data={data} options={options} />
		<div className="LabelledSliderContainer">
			<div className="LabelledSlider">
				<span>No Bias</span>
				<input
					type="range"
					min={0.0}
					max={1.0}
					value={bias}
					step={0.01}
					onChange={(e) => onBiasChange(parseFloat(e.target.value))}
					style={{ width: '70%' }}
				/>
				<span>Full Bias</span>
			</div>
		</div>
		<p>For reference, if there was a group of 50 people,
			and you wanted to remember 5 traits per person,
			you would, with your current level of bias, want to remember {Math.ceil((1 - bias) * 49 * 5 + 5)} traits.</p>
		<p>Simply grouping everyone together as having 5 traits would be {Math.ceil((1 - bias) * 49 * 5 + 5) / 5}x as easy.
			If you also take into account that it gets harder and harder to remember new information
			if your brain already has a lot of new information to process, that number becomes even bigger. (source)</p>
		{/* TODO: Draggable values */}
	</div>);
};

export default MemoryGraphSlider;