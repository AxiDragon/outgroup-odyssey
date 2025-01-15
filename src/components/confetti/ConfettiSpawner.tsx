import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./ConfettiSpawner.module.css";
import ConfettiParticle from "./ConfettiParticle";

const ConfettiSpawner = forwardRef((props, ref) => {
	const [confettiLaunched, setConfettiLaunched] = useState(false);
	const particleCount = Math.floor(window.innerWidth / 4);

	useImperativeHandle(ref, () => ({
		launchConfetti: () => {
			if (!confettiLaunched) {
				setConfettiLaunched(true);
				setTimeout(() => {
					setConfettiLaunched(false);
				}, 7000);
			}
		}
	}));

	return (
		<div className={styles.ConfettiSpawner}>
			{confettiLaunched && [...Array(particleCount)].map((_, i) => (
				<ConfettiParticle key={i} />
			))}
		</div>
	);
});

export default ConfettiSpawner;