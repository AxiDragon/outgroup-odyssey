import ChartFruit, { FruitProps } from "./ChartFruit";
import styles from './FruitChart.module.css';

import friendly from "@a/graph/friendly.png";
import neutral from "@a/graph/neutral.png";
import unfriendly from "@a/graph/unfriendly.png";
import { useEffect, useRef, useState } from "react";

type Props = {
	fruitData: [FruitProps[], FruitProps[], FruitProps[]];
	maxFruitsPerColumn?: number;
	fruitHeight?: number;
	type?: 'friendliness' | 'in-outgroup';
};

const FruitChart = ({ fruitData, maxFruitsPerColumn = 4, fruitHeight = 100, type = 'friendliness' }: Props) => {
	const [data, setData] = useState(fruitData.map(c => [...c]));
	const [adjustedMaxFruitsPerColumn, setAdjustedMaxFruitsPerColumn] = useState(maxFruitsPerColumn);

	//TODO: fix the flexbox issue with the graph not being a matrix
	//fill in empty spaces with 'none' fruits, to ensure each column has the same length

	const columnRef = useRef<HTMLDivElement>(null);

	const refresh = () => {
		if (columnRef.current) {
			const children = Array.from(columnRef.current.children);

			if (children.length === 0) {
				return;
			}

			const leftmostPosition = children[0].getBoundingClientRect().left;

			for (let columns = 1; columns < children.length; columns++) {
				if (children[columns].getBoundingClientRect().left === leftmostPosition) {
					setAdjustedMaxFruitsPerColumn(maxFruitsPerColumn + (columns - maxFruitsPerColumn % columns));
					break;
				}
			}
		}
	};

	const isVisible = (element: HTMLElement | null): boolean => {
		if (element === null) return true;

		const style = window.getComputedStyle(element);

		if (style.display === 'none')
			return false;

		return isVisible(element.parentElement);
	}

	useEffect(() => {
		refresh(); //initial call to set the initial number of columns

		window.addEventListener('resize', refresh);

		return () => window.removeEventListener('resize', refresh);
	}, []);

	useEffect(() => {
		const checkDisplay = () => {
			if (columnRef.current) {
				if (isVisible(columnRef.current)) {
					refresh();
				}
			}
		};

		window.addEventListener('navigationClicked', checkDisplay);

		return () => {
			window.removeEventListener('navigationClicked', checkDisplay);
		};
	}, []);

	useEffect(() => {
		let fruitDataCopy = fruitData.map(c => [...c]);

		fruitDataCopy.forEach(c => {
			while (c.length < adjustedMaxFruitsPerColumn) {
				c.unshift({ fruitType: 'none' });
			}
		});

		setData(fruitDataCopy);
	}, [fruitData, adjustedMaxFruitsPerColumn]);

	return (
		<div className={styles.parentContainer}>
			<div className={styles.container}>
				<div className={styles.fruitColumnContainer}>
					{
						data.map((column, i) => (
							(type !== 'in-outgroup' || i !== 2) &&
							<div
								key={i}
								ref={i === 0 ? columnRef : null}
								className={styles.fruitColumn}
								style={{
									borderRight: i === 1 && type === 'friendliness' ? '5px solid var(--off-black)' : 'none',
									borderLeft: i === 1 ? '5px solid var(--off-black)' : 'none',
									borderTopLeftRadius: 5,
									borderTopRightRadius: 5,
								}}
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