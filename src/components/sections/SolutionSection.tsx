import Footnote from "../Footnote";
import SolutionChart from "../interactables/SolutionChart";

const SolutionSection = () => {
	return (
		<div>
			<h2>SO IT'S BAD. HOW DO WE STOP OUTGROUP HOMOGENEITY BIAS?</h2>
			<p>In reality, it is a bit hard to fix - it is a bias after all.
				And that means you're not really aware of when you're falling in its trap.</p>
			<p>That does mean that it'll help if you can realize more quickly when you're falling into that trap.
				One thing that helps with that is simply being conscious about its existence.
				Which, you should be, now that you've gone through this article. Go you!</p>
			<p>Once you do realize that you're generalizing an outgroup, though - what do you do then?</p>
			<SolutionChart />
			<p>...try to make the mental ingroup you're in, contain the outgroup too!<Footnote referenceId={5} /></p>
			<p><i>I should put a better ending here. but I'm not sure what exactly. give me ideas please</i></p>
		</div>
	);
}

export default SolutionSection;