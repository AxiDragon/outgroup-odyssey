import { CSSProperties, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './SourceNote.module.css';

type Props = {
	referenceId: number;
}

const sources = [
	"Sapolsky, Robert M. (2017). Behave: The Biology of Humans at Our Best and Worst. Penguin Press.",
	"Rubin, M., Hewstone, M., Crisp, R. J., Voci, A., & Richards, Z. (2004). Gender out-group homogeneity: The roles of differential familiarity, gender differences, and group size. In V. Yzerbyt, C. M. Judd, & O. Corneille (Eds.), The psychology of group perception: Perceived variability, entitativity, and essentialism (pp. 203-220). New York: Psychology Press.",
	"Ackerman, Joshua M., Jenessa R. Shapiro, Steven L. Neuberg, Douglas T. Kenrick, D. Vaughn Becker, Vladas Griskevicius, Jon K. Maner & Mark Schaller (2006). They all look the same to me (Unless they're angry): From out-group homogeneity to out-group heterogeneity. Psychological Science 17(10): 836-40.",
	`Scott, Catherine (27 March 2023). "How HR Can Identify and Overcome Affinity Bias in Hiring and the Workplace". Academy to Innovate HR (AIHR). Retrieved 23 December 2024.`,
	"Johnson, Kareem J. & Barbara L. Fredrickson (2005). 'We all look the same to me': Positive emotions eliminate the own-race bias in face recognition. Psychological Science16(11): 875-81",
	"Nicky Case (for inspiration!)",
]

// const borderMargin = 10;
const maxWidth = 500;

const Sourcenote = ({ referenceId: sourceId }: Props) => {
	const [show, setShow] = useState(false);
	const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
	const source = sources[sourceId - 1];

	useEffect(() => {
		window.addEventListener('click', () => setShow(false));

		return () => {
			window.removeEventListener('click', () => setShow(false));
		}
	}, [show]);

	const onPopupClick = () => {
		navigator.clipboard.writeText(source);
	}

	const onClick = (event: MouseEvent<HTMLElement>) => {
		setTimeout(() => {
			setClickPosition({ x: event.clientX, y: event.clientY });
			setShow(true);
		}, 0); //let the click event finish before showing the popup, so that the click event doesn't close the popup
	};

	const getStyle = (): CSSProperties => {
		const { innerWidth, scrollY } = window;

		const onRight: boolean = clickPosition.x > innerWidth / 2;

		return {
			opacity: show ? 1 : 0,
			pointerEvents: show ? 'auto' : 'none',
			left: onRight ? Math.max(0, clickPosition.x - maxWidth) : clickPosition.x,
			right: onRight ? innerWidth - clickPosition.x : Math.max(0, innerWidth - clickPosition.x - maxWidth),
			top: clickPosition.y + scrollY,
		};
	}

	return (
		<>
			<span className={styles.sourcePopup}
				style={getStyle()}
				onClick={onPopupClick}
			>{source}</span>
			<sup onClick={onClick} style={{ color: 'var(--apple)', cursor: 'help' }}>[{sourceId}]</sup>
		</>
	);
}

export default Sourcenote;