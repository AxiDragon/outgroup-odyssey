import { useState } from "react";

type Props = {
	images: string[];
}

function SliderImage({ images }: Props) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<div className="SliderImage">
			<img src={images[currentImageIndex]} alt="placeholder" />
			<span>No Bias</span>
			<input
				type="range"
				min={0}
				max={images.length - 1}
				value={currentImageIndex}
				onChange={(e) => setCurrentImageIndex(parseInt(e.target.value))}
			/>
			<span>Full Bias</span>
		</div>
	);
}

export default SliderImage;