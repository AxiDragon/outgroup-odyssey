import getColor from '@/utility/getBiasColor';
import styles from './LabelledSlider.module.css';

type Props = {
	type: 'bias' | 'in-outgroup';
	value: number;
	onChange: (value: number) => void;
}

const LabelledSlider = ({ type, value, onChange }: Props) => {
	return (
		<div className={styles.LabelledSlider}>
			{type === 'bias' && <div><b>No Bias</b></div>}
			<input
				className={styles.slider}
				type="range"
				min={0.0}
				max={1.0}
				value={value}
				step={0.001}
				onChange={(e) => { onChange(parseFloat(e.target.value)) }}
				style={{
					accentColor: getColor((type === 'bias' ? value : 1 - value)),
				}}
			/>
			{type === 'bias' && <div><b>Full Bias</b></div>}
		</div>
	);
};

export default LabelledSlider;