import ChartFruit, { FruitProps } from "./ChartFruit";
import styles from './FruitChart.module.css';

import friendly from "@a/graph/friendly.png";
import neutral from "@a/graph/neutral.png";
import unfriendly from "@a/graph/unfriendly.png";

type Props = {
	fruitData: [FruitProps[], FruitProps[], FruitProps[]];
	minLength?: number;
	fruitHeight?: number;
	type?: 'friendliness' | 'in-outgroup';
};

//TODO: Grid?
const FruitChart = ({ fruitData, minLength = 4, fruitHeight = 100, type = 'friendliness' }: Props) => {
	const fruitDataCopy = fruitData.map(c => [...c]);
	const maxLength = Math.max(...fruitDataCopy.map(c => c.length), minLength);

	//fill in empty spaces with 'none' fruits, to ensure each column has the same length
	fruitDataCopy.forEach(c => {
		while (c.length < maxLength) {
			c.unshift({ fruitType: 'none' });
		}
	})

	return (
		<div className={styles.parentContainer}>
			<div className={styles.container}>
				<div className={styles.fruitColumnContainer}>
					{
						fruitDataCopy.map((column, i) => (
							(type !== 'in-outgroup' || i !== 2) &&
							<div
								key={i}
								className={styles.fruitColumn}
								style={{
									borderRight: i === 1 && type === 'friendliness' ? '5px solid var(--off-black)' : 'none',
									borderLeft: i === 1 ? '5px solid var(--off-black)' : 'none',
									borderTopLeftRadius: 5,
									borderTopRightRadius: 5,
									gridTemplateColumns: `repeat(${Math.ceil(100 / fruitHeight)}, 1fr)`,
								}}
							// TODO: Fix that each column will match the height of the tallest column
							>
								{column.map((fruit, j) => (
									type === 'in-outgroup' ?
										<ChartFruit key={j} fruitType={fruit.fruitType} subType={i === 0 ? 'neutral' : 'friendly'} height={fruitHeight} />
										: <ChartFruit key={j} {...fruit} height={fruitHeight} />
								))}
							</div>
						))
					}
				</div>
				<div className={styles.friendlinessLabels}>
					{
						type === 'friendliness' &&
						<>
							<img src={unfriendly} alt="Unfriendly" />
							<img src={neutral} alt="Neutral" />
							<img src={friendly} alt="Friendly" />
						</>
					}
					{
						type === 'in-outgroup' &&
						<>
							<p style={{ fontSize: 20 }}>Outgroup</p>
							<p style={{ fontSize: 20 }}>Ingroup</p>
						</>
					}
				</div>
			</div>
		</div>
	);
};

export default FruitChart;