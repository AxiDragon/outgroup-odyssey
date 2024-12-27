import Footnote from "../Footnote";
import BiasFruitChart from "../interactables/BiasFruitChart";

const EffectSection = () => {
	return (
		<div>
			<h2>YOU'RE MAKING IT SOUND LIKE A GOOD THING. WHAT'S THE CATCH?</h2>
			<p>Yeah, it's true that your brain uses the bias to conserve memory space.
				But, by doing this, it also generalizes people from outgroups.
				A person from an outgroup becomes 'just another one of those'.</p>
			<p>What this results in is that characteristics of people from outgroups are perceived as less 'strong'.</p>
			<p>This can be an issue in 'winner-takes-all' scenarios.</p>
			<p>Some literal examples are the 'Miss Congeniality' title in RuPaul's Drag Race, which is awarded to the kindest, most helpful contestant.
				Or how the winner of 'Big Brother' is mostly determined by how charismatic a contestant is.</p>
			<p>In a more common context, outgroup homogeneity bias can also lead to discrimination in a job interview.
				The interviewer might perceive a candidate from an outgroup as less competent or friendly.<Footnote referenceId={4} /></p>
			<p>What if Gala was a recruiter, and needed to pick the friendliest candidate from a group consisting of apples and pears?</p>
			<BiasFruitChart />
			<p>If Gala's bias shone through, you can see that pears barely have any chance of landing a job. (source)</p>
			<p>This could, in turn, result in long-term disadvantages.</p>
			<p><i>(Of course, there's more causes to this than just this bias,
				but outgroup homogeneity bias does play a part.)</i></p>
		</div>
	);
}

export default EffectSection;