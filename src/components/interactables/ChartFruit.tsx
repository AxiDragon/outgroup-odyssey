import styles from './ChartFruit.module.css';

import appleFriendly from "@a/placeholder/apple-friendly.png";
import appleNeutral from "@a/placeholder/apple-neutral.png";
import appleUnfriendly from "@a/placeholder/apple-unfriendly.png";

import pearFriendly from "@a/placeholder/pear-friendly.png";
import pearNeutral from "@a/placeholder/pear-neutral.png";
import pearUnfriendly from "@a/placeholder/pear-unfriendly.png";

import cherryFriendly from "@a/placeholder/cherry-friendly.png";
import cherryNeutral from "@a/placeholder/cherry-neutral.png";

import orangeFriendly from "@a/placeholder/orange-friendly.png";
import orangeNeutral from "@a/placeholder/orange-neutral.png";

export type FruitType = 'apple' | 'pear' | 'cherry' | 'orange' | 'none';
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
			case 'cherry':
				switch (subType) {
					case 'friendly': return cherryFriendly;
					case 'neutral': return cherryNeutral;
					default: return cherryNeutral;
				}
			case 'orange':
				switch (subType) {
					case 'friendly': return orangeFriendly;
					case 'neutral': return orangeNeutral;
					default: return orangeNeutral;
				}
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