import styles from "./Section.module.css";

type Props = {
	onClickNavigation: (direction: -1 | 1) => void; // back - next
	children?: React.ReactNode;
	style?: React.CSSProperties;
	disabledNavButtons?: 'none' | 'back' | 'next';
};

const Section = ({ children, onClickNavigation, style, disabledNavButtons = 'none' }: Props) => {
	return (
		<div style={style} className={styles.Section}>
			{
				disabledNavButtons !== 'back' &&
				<div className={styles.navButtonContainer} style={{ justifyContent: 'flex-start' }}>
					<div onClick={() => onClickNavigation(-1)} className={styles.navButton}>
						◀ BACK
					</div>
				</div>
			}
			{children}
			{
				disabledNavButtons !== 'next' &&
				<div className={styles.navButtonContainer} style={{
					justifyContent: 'flex-end',
					backgroundColor: 'var(--header-pear)',
				}}>
					<div onClick={() => onClickNavigation(1)} className={styles.navButton}>
						NEXT ▶
					</div>
				</div>
			}
		</div>
	);
}

export default Section;