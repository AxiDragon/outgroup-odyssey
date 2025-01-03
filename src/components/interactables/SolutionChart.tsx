import { useRef, useState } from "react";
import { FruitProps } from "./ChartFruit";
import FruitChart from "./FruitChart";

const batchCount = 30;

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

	const getIngroupSize = () => Math.ceil(fruitRef.current.length * (Math.pow(Math.max(0.01, ingroupPercentage), 2.5)));

	function getSplitData(): [FruitProps[], FruitProps[], FruitProps[]] {
		const data: [FruitProps[], FruitProps[], FruitProps[]] = [[], [], []];
		const i = getIngroupSize();

		data[0] = fruitRef.current.slice(i, fruitRef.current.length);
		data[1] = fruitRef.current.slice(0, i);

		return data;
	}

	function getIngroupCommonality(): string {
		const ingroupSize = getIngroupSize();

		if (ingroupSize === fruitRef.current.length) {
			return "stuck in a graph on a website!";
		}
		if (ingroupSize === 0) {
			return "non-existent...";
		}
		if (ingroupSize === 1) {
			return "alone. Try moving the slider!";
		}
		if (ingroupSize < 6) {
			return "family!";
		}
		if (ingroupSize < 15) {
			return "friends!";
		}
		if (ingroupSize < 35) {
			return "interested in the same hobby!";
		}
		if (ingroupSize < 90) {
			return "living in the same area!";
		}
		if (ingroupSize < 150) {
			return "living in the same town!";
		}

		return "hackers. You shouldn't be able to see this!";
	};

	return (
		<div className="PlayableContainer">
			<div className="Playable">
				<FruitChart minLength={batchCount * 5} fruitData={getSplitData()} fruitHeight={10} type="in-outgroup" />
				<div className="LabelledSliderContainer">
					<div className="LabelledSlider">
						<input
							type="range"
							min={0}
							max={1}
							value={ingroupPercentage}
							step={0.001}
							onChange={(e) => onIngroupPercentageChange(parseFloat(e.target.value))}
							style={{ width: '100%' }}
						/>
					</div>
				</div>
				<p>Your current ingroup consists of <b>{getIngroupSize()}</b> {getIngroupSize() === 1 ? "person" : "people"}!</p>
				<p>Something you could have in common is that you are all <b>{getIngroupCommonality()}</b></p >
			</div>
		</div>
	);
};

export default SolutionChart;