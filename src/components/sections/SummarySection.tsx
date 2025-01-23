import FormLink from "../FormLink";

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
						<b>Rather than looking at what divides us, look at what unites us.</b></li>
				</ul>
				<br />
				<p style={{
					fontSize: '1.5em',
					fontWeight: 'bold',
					textAlign: 'center',
					fontFamily: `'Anaheim', sans-serif`,
					textTransform: 'uppercase',
				}}>Thank you for playing this explorable explanation!</p>
				<p>Since you've made it here,</p> <FormLink /> <p>I'll even fill in the first question for you!</p>
				<p style={{
					fontSize: '12px',
				}}><i>Note - I am no longer using results from the form!</i></p>
			</div>
		</div >
	);
}

export default SummarySection;