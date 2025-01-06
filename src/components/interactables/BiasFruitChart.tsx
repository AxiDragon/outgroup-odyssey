import { useState } from "react";
import { FruitProps } from "./ChartFruit";
import FruitChart from "./FruitChart";

const batchCount = 20;

const BiasFruitChart = () => {
	const baseData: [FruitProps[], FruitProps[], FruitProps[]] = [
		Array(batchCount).fill({ fruitType: "apple", subType: "unfriendly" }),
		[...Array(batchCount).fill({ fruitType: "pear", subType: "neutral" }), ...Array(batchCount).fill({ fruitType: "apple", subType: "neutral" })],
		Array(batchCount).fill({ fruitType: "apple", subType: "friendly" }),
	];
	const [bias, setBias] = useState(0);

	const onBiasChange = (newValue: number) => {
		setBias(newValue);
	}

	function getBiasedFruitData(): [FruitProps[], FruitProps[], FruitProps[]] {
		const biasedData: [FruitProps[], FruitProps[], FruitProps[]] = [
			[...baseData[0]],
			[...baseData[1]],
			[...baseData[2]],
		]

		const toNeutral = Math.floor(batchCount * bias);

		biasedData[0].unshift(...Array(batchCount - toNeutral).fill({ fruitType: "pear", subType: "unfriendly" }));
		biasedData[1].unshift(...Array(toNeutral).fill({ fruitType: "pear", subType: "unfriendly" }));
		biasedData[1].unshift(...Array(toNeutral).fill({ fruitType: "pear", subType: "friendly" }));
		biasedData[2].unshift(...Array(batchCount - toNeutral).fill({ fruitType: "pear", subType: "friendly" }));

		return biasedData;
	}

	return (
		<div className="PlayableContainer">
			<div className="Playable">
				<p>In this example, there are a total of {batchCount * 6} candidates. With your current level of
					bias, {batchCount} apples are perceived as friendly,
					whilst <b>{batchCount - Math.floor(batchCount * bias)}</b> pears are perceived as friendly.
					If a candidate from the 'Friendly' category was chosen, there would currently be
					a <b>{Math.round(1 / (2 - bias) * 100)}%</b> chance that it is an apple,
					and a <b>{Math.round((1 - 1 / (2 - bias)) * 100)}%</b> chance that it is a pear.
				</p>
				<FruitChart minLength={batchCount * 4} fruitData={getBiasedFruitData()} fruitHeight={20} />
				<div className="LabelledSliderContainer">
					<div className="LabelledSlider">
						<span>No Bias</span>
						<input
							type="range"
							min={0.0}
							max={1.0}
							value={bias}
							step={0.001}
							onChange={(e) => onBiasChange(parseFloat(e.target.value))}
							style={{ width: '70%' }}
						/>
						<span>Full Bias</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BiasFruitChart;