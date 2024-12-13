import ImageSlideShow from "@c/interactables/ImageSlideShow";

import solution1 from "@a/placeholder/solution-1.jpg";
import solution2 from "@a/placeholder/solution-2.jpg";
import solution3 from "@a/placeholder/solution-3.jpg";
import solution4 from "@a/placeholder/solution-4.jpg";
import solution5 from "@a/placeholder/solution-5.jpg";

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
			<ImageSlideShow images={[solution1, solution2, solution3, solution4, solution5]} />
			<p style={{ fontSize: 10 }}><i>Tap the image!</i></p>
			<p>...try to make the mental ingroup you're in, contain the outgroup too!</p>
			<p><i>I should put a better ending here. but I'm not sure what exactly. give me ideas please</i></p>
		</div>
	);
}

export default SolutionSection;