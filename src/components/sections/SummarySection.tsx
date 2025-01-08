const SummarySection = () => {
	return (
		<div className="Section">
			<h2>TO SUMMARIZE</h2>
			<div className="SectionText">
				<ul>
					<li>Outgroup homogeneity bias refers to the tendency to underestimate
						the differences among members of a group to which we do not belong.</li>
					<li>One cause of outgroup homogeneity bias is that it's easier for our brain to
						think that an outgroup consists	of all the same sorts of people.</li>
					<li>Outgroup homogeneity bias can lead to people from outgroups
						being perceived as less competent or friendly.</li>
					<li>When you find yourself falling into the trap of outgroup homogeneity
						bias, find commonalities with the other person,
						creating a new ingroup that includes both you and the other person.<br />
						Rather than looking at what divides you, look at what unites you.</li>
				</ul>
				<br />
				<p style={{
					fontSize: '1.5em',
					fontWeight: 'bold',
					textAlign: 'center',
					fontFamily: `'Anaheim', sans-serif`,
					textTransform: 'uppercase',
				}}>Thank you for playing this explorable explanation!</p>
			</div>
		</div >
	);
}

export default SummarySection;