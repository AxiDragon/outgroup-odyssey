import { useRef, useState } from "react";
import { FruitProps } from "./ChartFruit";
import FruitChart from "./FruitChart";
import ClickableChartFruit from "./ClickableChartFruit";

type Props = {
	fruitHeight?: number;
};

const ClickableFruitChart = ({ fruitHeight = 100 }: Props) => {
	const baseFruits: FruitProps[] = [
		{ fruitType: "apple", subType: "unfriendly" }, { fruitType: "apple", subType: "unfriendly" },
		{ fruitType: "apple", subType: "neutral" }, { fruitType: "apple", subType: "neutral" },
		{ fruitType: "apple", subType: "friendly" }, { fruitType: "apple", subType: "friendly" },
		{ fruitType: "pear", subType: "unfriendly" }, { fruitType: "pear", subType: "unfriendly" },
		{ fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" },
		{ fruitType: "pear", subType: "friendly" }, { fruitType: "pear", subType: "friendly" },
	];

	const shuffledFruits = baseFruits.sort(() => Math.random() - 0.5);

	const clickableFruitRef = useRef<FruitProps[]>([...shuffledFruits]);

	const [fruitData, setFruitData] = useState<[FruitProps[], FruitProps[], FruitProps[]]>([[], [], []]);

	function onFruitClick(fruitProps: FruitProps) {
		switch (fruitProps.subType) {
			case 'friendly':
				setFruitData([fruitData[0], fruitData[1], [fruitProps, ...fruitData[2]]]);
				break;
			case 'neutral':
				setFruitData([fruitData[0], [fruitProps, ...fruitData[1]], fruitData[2]]);
				break;
			case 'unfriendly':
				setFruitData([[fruitProps, ...fruitData[0]], fruitData[1], fruitData[2]]);
				break;
			default:
				break;
		};
	}

	return (
		<div>
			<h3>Click on the fruits to sort them!</h3>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
				marginTop: 20,
				width: '100%',
			}}>
				<div style={{
					display: 'flex',
					gap: 20,
					justifyContent: 'center',
					alignContent: 'center',
					marginBottom: 20,
					width: '100%',
				}}>
					{clickableFruitRef.current.map((fruit, index) => (
						<ClickableChartFruit key={index} fruitProps={{ ...fruit, height: fruitHeight }} onClick={onFruitClick} />
					))}
				</div>
			</div>
			<FruitChart fruitData={fruitData} minLength={baseFruits.length / 3} fruitHeight={fruitHeight} />
		</div>
	);
}

export default ClickableFruitChart;