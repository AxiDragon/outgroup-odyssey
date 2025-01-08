import Sourcenote from "../SourceNote";
import BiasFruitChart from "../interactables/BiasFruitChart";

const EffectSection = () => {
	return (
		<div className="Section">
			<h2>OKAY, NOW WHAT'S THE BAD PART?</h2>
			<div className="SectionText">
				<p>It's true that your brain uses the bias to conserve memory space.
					But, by doing this, it also generalizes people from outgroups.
					A person from an outgroup becomes 'just another one of those'.</p>
				<p>For example, in a job interview, outgroup homogeneity bias might make an interviewer perceive a candidate from an outgroup as less competent or friendly.<Sourcenote referenceId={4} /></p>
				<p>What if Gala was a recruiter, and needed to pick the friendliest candidate from a group consisting of apples and pears?</p>
			</div>
			<BiasFruitChart />
			<div className="SectionText">
				<p>Notice how, regardless of bias, the average friendliness of the pears that Gala perceives stays the same
					- but it still hurts the chances of friendly pears to land a job, simply because they are pears.</p>
			</div>
		</div>
	);
}

export default EffectSection;