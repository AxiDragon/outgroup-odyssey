import Footnote from "../Footnote";
import SolutionChart from "../interactables/SolutionChart";

const SolutionSection = () => {
	return (
		<div>
			<h2>HOW DO WE STOP OUTGROUP HOMOGENEITY BIAS?</h2>
			<p>In reality, it is a bit hard to fix - it is a bias after all.
				And that means you're not really aware of when you're falling in its trap.</p>
			<p>That does mean that it'll help if you can realize more quickly when you're falling into that trap.
				One thing that helps with that is simply being conscious about its existence.
				Which, you should be, now that you've gone through this article. Go you!</p>
			<p>Once you do realize that you're generalizing an outgroup, though - what do you do then?</p>
			<p>Try moving the slider!</p>
			<SolutionChart />
			<p>Of course, what you have in common with another person depends on context.
				But, by finding things that you have in common with a person from an outgroup, you are creating a new ingroup
				which includes both you and the other person. It could be something as simple as having the same favorite color,
				liking the same music, or having the same hairstyle!<Footnote referenceId={5} /></p>
		</div>
	);
}

export default SolutionSection;