import { useEffect, useRef } from "react";
import styles from "./ConfettiParticle.module.css";

const ConfettiParticle = () => {
	const particleRef = useRef<HTMLDivElement>(null);
	const colorRef = useRef<string>(Math.random() > 0.5 ? 'var(--apple)' : 'var(--pear)');
	const sizeRef = useRef<number>(Math.random() * 15 + 10);
	const xRef = useRef<number>((Math.random() * 1.1 - 0.1) * window.innerWidth);

	const delay = Math.random() * 2;
	const fallTime = 2 + Math.random() * 2;
	const animationTime = 0.3 + Math.random() * 1;

	useEffect(() => {
		setTimeout(() => {
			if (particleRef.current) {
				particleRef.current.style.bottom = -25 + "px";
			}
		}, delay * 1000);
	}, []);

	return (
		<div ref={particleRef} className={styles.ConfettiParticle} style={{
			backgroundColor: colorRef.current,
			transition: `bottom ${fallTime}s ease-in`,
			width: sizeRef.current,
			height: sizeRef.current,
			left: xRef.current,
			animationDuration: `${animationTime}s`,
		}} />
	);
}

export default ConfettiParticle;