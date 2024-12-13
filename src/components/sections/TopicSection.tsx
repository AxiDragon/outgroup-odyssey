const TopicSection = () => {
	return (
		<div>
			<h2>OUTGROUP HOMOGENEITY BIAS? WHAT'S THAT?</h2>
			<p>Outgroup homogeneity bias is the phenomenon that we underestimate the differences among
				members of a group that we are not a part of (the so-called outgroup).</p>
			<p>For example, we have apples and pears. If it helps, imagine that the apples are your group of friends,
				whilst the pears are... accountants. Or construction workers. Or professional athletes.
				Whatever you'd consider as an outgroup.</p>
			<p>Say we have this apple, Gala.</p>
			<p><sub> Picture of Gala </sub></p>
			<p>And Gala knows many different other apples. And Gala knows they're an apple,
				like other apples (one of Gala's so-called ingroups).</p>
			<p><sub> Picture of Gala with other apples </sub></p>
			<p>Gala also knows the existence of pears, but hasn't really interacted with them
				(again, the outgroup).</p>
			<p><sub> Picture of Gala with pears in the distance </sub></p>
			<p>We then present Gala a task.</p>
			<p><sub> Gala with a piece of paper </sub></p>
			<p><sub> Gala looking up, saying "I... need to say what percentage of apples and pears are bad, alright or good at baking?" </sub></p>
			<p><sub> Gala talking about 3 apples, one bad, one okay, one good, with the resulting distributed graph on the right (the graph should probably be a component) </sub></p>
			<p><sub> Gala talking about the pears, unsure, with the resulting graph on the right - not distributed </sub></p>
			<p>...compared to apples, there's less distribution between the three options.
				Thus, Gala believes (AKA biases) that the baking skills of the pears (AKA outgroup)
				are more similar (AKA homogenous) than those of the apples.</p>
			<p>But, in reality, when we makes all fruits attempt to make their most delicious cakes...</p>
			<p><sub> Interactable with 9 apples, 9 pears, all clickable, which will move into rows based on their baking skills</sub></p>
			<p>...we see that the pears are just as diverse in their baking skills as the apples.</p>
			<p>Even if it intuitively seems correct to lump a group into the same category,
				they're actually just as unique as the other group.</p>
		</div>
	);
}

export default TopicSection;