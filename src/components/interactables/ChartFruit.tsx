import styles from './ChartFruit.module.css';

import appleFriendly from "@a/graph/apple-friendly.png";
import appleNeutral from "@a/graph/apple-neutral.png";
import appleUnfriendly from "@a/graph/apple-unfriendly.png";

import pearFriendly from "@a/graph/pear-friendly.png";
import pearNeutral from "@a/graph/pear-neutral.png";
import pearUnfriendly from "@a/graph/pear-unfriendly.png";

export type FruitType = 'apple' | 'pear' | 'orange' | 'none';
export type SubType = 'friendly' | 'neutral' | 'unfriendly';

export type FruitProps = {
	fruitType: FruitType;
	subType?: SubType;
	height?: number;
};

const ChartFruit = ({ fruitType, subType = 'neutral', height = 100 }: FruitProps) => {
	function getImageSrc(): string {
		switch (fruitType) {
			case 'apple':
				switch (subType) {
					case 'friendly': return appleFriendly;
					case 'neutral': return appleNeutral;
					case 'unfriendly': return appleUnfriendly;
					default: return appleNeutral;
				}
			case 'pear':
				switch (subType) {
					case 'friendly': return pearFriendly;
					case 'neutral': return pearNeutral;
					case 'unfriendly': return pearUnfriendly;
					default: return pearNeutral;
				}
			case 'orange':
			default: return appleNeutral;
		}
	}

	return (
		<div style={{ height: height, width: height }} >
			{
				fruitType === 'none' ?
					<div className={styles.empty} style={{
						height: height,
					}} /> //for empty spaces in FruitCharts
					:
					<div className={styles.fruit} style={{
						height: height,
					}} >
						<img src={getImageSrc()} alt={fruitType} style={{
							height: height,
						}} />
					</div>
			}
		</div>
	);
}

export default ChartFruit;