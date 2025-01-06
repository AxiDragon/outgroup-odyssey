import Footnote from "../Footnote";
import SolutionChart from "../interactables/SolutionChart";

const SolutionSection = () => {
	return (
		<div className="Section">
			<div className="SectionText">
				<h2>HOW DO WE STOP OUTGROUP HOMOGENEITY BIAS?</h2>
				<p>In reality, it is a bit hard to fix - it is a bias after all.
					And that means you're not really aware of when you're falling in its trap.</p>
				<p>That does mean that it'll help if you can realize when you're falling into that trap.
					One thing that helps with that is simply being conscious about its existence.
					Which, you should be, now that you've gone through this article. Go you!</p>
				<p>Simply being aware of something bad doesn't stop it, though - so, how do you counteract
					outgroup homogeneity bias? </p>
				<p>One way is to find things that you have in common with people from outgroups. After all,
					ingroups are based on things you have in common with other people - so, if you find something
					you have in common with a person from an outgroup, you're creating a new ingroup!<Footnote referenceId={5} />
				</p>
				<p>But, how do you find commonalities with every single person, ever?</p>
				<p>Have a look at the graph below!</p>
			</div>
			<SolutionChart />
			<div className="SectionText">
				<p>Of course, what you have in common with another person depends on context.
					But, by finding things that you have in common with a person from an outgroup, you are creating a new ingroup
					which includes both you and the other person. It could be something as simple as having the same favorite color,
					liking the same music, or having the same hairstyle!</p>
			</div>
		</div>
	);
}

export default SolutionSection;