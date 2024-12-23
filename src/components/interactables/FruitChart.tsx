import ChartFruit, { FruitProps } from "./ChartFruit";
import styles from './FruitChart.module.css';

import friendly from "@a/placeholder/friendly.png";
import neutral from "@a/placeholder/neutral.png";
import unfriendly from "@a/placeholder/unfriendly.png";

type Props = {
	fruitData: [FruitProps[], FruitProps[], FruitProps[]];
};

const FruitChart = ({ fruitData }: Props) => {
	return (
		<div className={styles.parentContainer}>
			<div className={styles.container}>
				<div className={styles.fruitColumnContainer}>
					{
						fruitData.map((column, i) => (
							<div
								key={i}
								className={styles.fruitColumn}
								style={{
									borderRight: i === 1 ? '5px solid black' : 'none',
									borderLeft: i === 1 ? '5px solid black' : 'none',
								}}
							// TODO: Fix that each column will match the height of the tallest column
							>
								{column.map((fruit, j) => (
									<ChartFruit key={j} {...fruit} />
								))}
							</div>
						))
					}
				</div>
				<div className={styles.friendlinessLabels}>
					<img src={unfriendly} alt="Unfriendly" />
					<img src={neutral} alt="Neutral" />
					<img src={friendly} alt="Friendly" />
				</div>
			</div>
		</div>
	);
};

export default FruitChart;