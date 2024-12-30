import { useState } from "react";
import { FruitProps } from "./ChartFruit";
import FruitChart from "./FruitChart";

const batchCount = 20;

const SolutionChart = () => {
	const fruits: FruitProps[] = [
		...Array(batchCount).fill({ fruitType: "apple", subType: "unfriendly" }),
		...Array(batchCount).fill({ fruitType: "pear", subType: "neutral" }),
		...Array(batchCount).fill({ fruitType: "apple", subType: "neutral" }),
		...Array(batchCount).fill({ fruitType: "apple", subType: "friendly" })
	];

	const fruitLength = fruits.length;

	const [ingroupSize, setIngroupSize] = useState(1);

	const onIngroupSizeChange = (newValue: number) => {
		setIngroupSize(newValue);
	}

	function getSplitData(): [FruitProps[], FruitProps[], FruitProps[]] {
		const data: [FruitProps[], FruitProps[], FruitProps[]] = [[], [], []];

		console.log(ingroupSize);

		data[0] = fruits.slice(ingroupSize, fruits.length);
		data[1] = fruits.slice(0, ingroupSize);

		return data;
	}

	return (
		<div>
			<FruitChart minLength={batchCount * 4} fruitData={getSplitData()} fruitHeight={20} type="in-outgroup" />
			<div className="LabelledSliderContainer">
				<div className="LabelledSlider">
					<span>No Bias</span>
					<input
						type="range"
						min={1}
						max={fruitLength}
						value={ingroupSize}
						step={1}
						onChange={(e) => onIngroupSizeChange(parseFloat(e.target.value))}
						style={{ width: '70%' }}
					/>
					<span>Full Bias</span>
				</div>
			</div>
		</div>
	);
};

export default SolutionChart;