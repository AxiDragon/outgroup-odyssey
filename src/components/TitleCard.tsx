import apples from '@/assets/other/title-apples.png';
import pears from '@/assets/other/title-pears.png';

const TitleCard = () => {
	return (
		<div className="TitleCard">
			<img src={apples} alt="Apples"
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					maxWidth: '50%',
				}} />
			<img src={pears} alt="Pears"
				style={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					maxWidth: '50%',
				}} />
			<h4>
				<span style={{ color: 'var(--apple)' }}>APPLES </span>
				&
				<span style={{ color: 'var(--pear)' }}> PEARS</span></h4>
			<h1>OUTGROUP ODYSSEY</h1>
			<p style={{ padding: '0 25px', margin: 0, }}>An interactive article about outgroup homogeneity bias!</p>
		</div>
	);
};

export default TitleCard;