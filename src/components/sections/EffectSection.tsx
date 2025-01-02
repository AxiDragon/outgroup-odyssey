import Footnote from "../Footnote";
import BiasFruitChart from "../interactables/BiasFruitChart";

const EffectSection = () => {
	return (
		<div>
			<h2>OKAY, THAT'S GOOD. WHAT'S THE BAD PART?</h2>
			<p>It's true that your brain uses the bias to conserve memory space.
				But, by doing this, it also generalizes people from outgroups.
				A person from an outgroup becomes 'just another one of those'.</p>
			<p>For example, in a job interview, outgroup homogeneity bias might make an interviewer perceive a candidate from an outgroup as less competent or friendly.<Footnote referenceId={4} /></p>
			<p>What if Gala was a recruiter, and needed to pick the friendliest candidate from a group consisting of apples and pears?</p>
			<BiasFruitChart />
			<p>Notice how, regardless of bias, the average friendliness of the pears that Gala perceives stays the same
				- but it still hurts the chances of friendly pears to land a job, simply because they are pears.</p>
		</div>
	);
}

export default EffectSection;