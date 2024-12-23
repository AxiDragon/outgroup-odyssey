import styles from './ChartFruit.module.css';

import apple from "@a/placeholder/apple.png";
import appleFriendly from "@a/placeholder/apple-friendly.png";
import appleNeutral from "@a/placeholder/apple-neutral.png";
import appleUnfriendly from "@a/placeholder/apple-unfriendly.png";
import appleQuestion from "@a/placeholder/apple-question.png";

import pear from "@a/placeholder/pear.png";
import pearFriendly from "@a/placeholder/pear-friendly.png";
import pearNeutral from "@a/placeholder/pear-neutral.png";
import pearUnfriendly from "@a/placeholder/pear-unfriendly.png";
import pearQuestion from "@a/placeholder/pear-question.png";

export type FruitType = 'apple' | 'pear';
export type SubType = 'friendly' | 'neutral' | 'unfriendly' | 'none' | 'question';

export type FruitProps = {
	fruitType: FruitType;
	subType?: SubType;
};

const ChartFruit = ({ fruitType, subType = 'question' }: FruitProps) => {
	function getImageSrc(): string {
		if (fruitType === 'apple') {
			switch (subType) {
				case 'friendly': return appleFriendly;
				case 'neutral': return appleNeutral;
				case 'unfriendly': return appleUnfriendly;
				case 'none': return apple;
				default: return appleQuestion;
			}
		} else {
			switch (subType) {
				case 'friendly': return pearFriendly;
				case 'neutral': return pearNeutral;
				case 'unfriendly': return pearUnfriendly;
				case 'none': return pear;
				default: return pearQuestion;
			}
		}
	}

	return (
		<div className={styles.fruit}>
			<img src={getImageSrc()} alt={fruitType} />
		</div>
	);
}

export default ChartFruit;