import { useState } from "react";
import ChartFruit, { FruitProps } from "./ChartFruit";

type Props = {
	fruitProps: FruitProps;
	onClick: (fruitProps: FruitProps) => void;
};

const ClickableChartFruit = ({ fruitProps, onClick }: Props) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (clicked) return;

		onClick(fruitProps);
		setClicked(true);
	}

	return (
		<div onClick={handleClick} style={{
			cursor: clicked ? 'default' : 'pointer',
			height: fruitProps.height,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			visibility: clicked ? 'hidden' : 'visible',
		}}>
			<ChartFruit {...fruitProps} />
		</div>
	);
};

export default ClickableChartFruit;
