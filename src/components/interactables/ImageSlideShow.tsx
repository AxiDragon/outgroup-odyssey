import { useState } from "react";

type Props = {
	images: string[];
}

function ImageSlideShow({ images }: Props) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const onClick = () => {
		setCurrentImageIndex(Math.min(currentImageIndex + 1, images.length - 1));
	}

	return (
		<div className="ImageSlideShow">
			<img src={images[currentImageIndex]} alt="placeholder" onClick={onClick} />
		</div>
	);
}

export default ImageSlideShow;