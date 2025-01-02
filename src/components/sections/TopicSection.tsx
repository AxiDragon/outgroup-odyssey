import gala from "@a/placeholder/gala.jpg";
import galaAndApples from "@a/placeholder/gala-and-apples.jpg";
import galaAndPears from "@a/placeholder/gala-and-pears.jpg";

import intro1 from "@a/placeholder/intro1.jpg";
import intro2 from "@a/placeholder/intro2.jpg";

import Footnote from "../Footnote";
import FruitChart from "../interactables/FruitChart";
import ClickableFruitChart from "../interactables/ClickableFruitChart";

const TopicSection = () => {
	return (
		<div>
			<h2>OUTGROUP HOMOGENEITY BIAS? WHAT'S THAT?</h2>
			<p>Outgroup homogeneity bias refers to the tendency to underestimate
				the differences among members of a group to which we do not belong (the so-called outgroup).
				<Footnote referenceId={1} /> </p>
			<p>For example, we have apples and pears. If it helps, imagine that the apples are your group of friends,
				whilst the pears are... accountants. Or construction workers. Or professional athletes.
				Whatever you'd consider as an outgroup.</p>
			<p>Say we have this apple, Gala.</p>
			<img src={gala} style={{ height: 150 }} />
			<p>And Gala knows many different other apples. And Gala knows they're an apple,
				like other apples (one of Gala's so-called ingroups).</p>
			<img src={galaAndApples} style={{ height: 250 }} />
			<p>Gala also knows of the existence of pears, but hasn't really interacted with them
				(again, the outgroup).</p>
			<img src={galaAndPears} style={{ height: 150 }} />
			<p>We then ask Gala to estimate what percentage of apples Gala believes are unfriendly, friendly, or
				somewhere inbetween.</p>
			<img src={intro1} style={{ height: 250 }} />
			<FruitChart fruitData={
				[
					[{ fruitType: "apple", subType: "unfriendly" }, { fruitType: "apple", subType: "unfriendly" }],
					[{ fruitType: "apple", subType: "neutral" }, { fruitType: "apple", subType: "neutral" }],
					[{ fruitType: "apple", subType: "friendly" }, { fruitType: "apple", subType: "friendly" }],
				]
			} />
			<p>When we look at the distribution of friendliness among the apples, we see that Gala believes
				that the apples are quite diverse in how friendly they are.</p>
			<p>However, when we ask Gala to do the same for the pears...</p>
			<img src={intro2} style={{ height: 250 }} />
			<FruitChart fruitData={
				[
					[{ fruitType: "pear", subType: "unfriendly" }],
					[{ fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }],
					[{ fruitType: "pear", subType: "friendly" }],
				]
			} />
			<p>...compared to apples, there's less distribution between the three options.
				Thus, Gala believes (AKA biases) that the friendliness of the pears (AKA outgroup)
				is more similar (AKA homogenous) than that of the apples.</p>
			<p>But, in reality, when we check the friendliness of all apples one by one...</p>
			<ClickableFruitChart />
			<p>...we see that the pears are just as diverse in how friendly they are as the apples.</p>
			<p>Even if it intuitively seems correct to lump everyone in an outgroup into the same category,
				they're actually just as unique as an ingroup.</p>
		</div>
	);
}

export default TopicSection;