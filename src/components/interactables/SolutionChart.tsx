import { useEffect, useRef, useState } from "react";
import { FruitProps } from "./ChartFruit";
import FruitChart from "./FruitChart";

const batchCount = 15;

const SolutionChart = () => {
	const initialFruits: FruitProps[] = [
		...Array(batchCount).fill({ fruitType: "apple", }),
		...Array(batchCount).fill({ fruitType: "pear", }),
		...Array(batchCount).fill({ fruitType: "cherry", }),
		...Array(batchCount).fill({ fruitType: "orange", })
	];

	const shuffledFruits = initialFruits.sort(() => Math.random() - 0.5);

	const fruitRef = useRef<FruitProps[]>([...Array(batchCount).fill({ fruitType: "apple", }), ...shuffledFruits]);

	const [ingroupPercentage, setIngroupPercentage] = useState(0);

	const onIngroupPercentageChange = (newValue: number) => {
		setIngroupPercentage(newValue);
	}

	function getSplitData(): [FruitProps[], FruitProps[], FruitProps[]] {
		const data: [FruitProps[], FruitProps[], FruitProps[]] = [[], [], []];
		const i = Math.floor(fruitRef.current.length * (Math.pow(ingroupPercentage, 2)));

		data[0] = fruitRef.current.slice(i, fruitRef.current.length);
		data[1] = fruitRef.current.slice(0, i);

		return data;
	}

	function getIngroupSizeTerm(): string {
		const ingroupSize = Math.floor(fruitRef.current.length * (Math.pow(ingroupPercentage, 2)));

		if (ingroupSize === fruitRef.current.length) {
			return "Everyone!";
		}
		if (ingroupSize === 0) {
			return "No one";
		}
		if (ingroupSize === 1) {
			return "You";
		}
		if (ingroupSize < 5) {
			return "Family";
		}
		if (ingroupSize < 10) {
			return "Friends";
		}
		if (ingroupSize < 20) {
			return "Friends and family";
		}
		if (ingroupSize < 40) {
			return "Neighbors";
		}
		if (ingroupSize < 60) {
			return "Neighborhood";
		}
		if (ingroupSize < 160) {
			return "Town";
		}

		return "You and your community";
	};

	return (
		<div>
			<FruitChart minLength={batchCount * 5} fruitData={getSplitData()} fruitHeight={20} type="in-outgroup" />
			<div className="LabelledSliderContainer">
				<div className="LabelledSlider">
					<span>All Out-group</span>
					<input
						type="range"
						min={0}
						max={1}
						value={ingroupPercentage}
						step={0.001}
						onChange={(e) => onIngroupPercentageChange(parseFloat(e.target.value))}
						style={{ width: '50%' }}
					/>
					<span>All In-group</span>
				</div>
			</div>
			<p><b>{getIngroupSizeTerm()}</b></p>
		</div>
	);
};

export default SolutionChart;