import gala from "@a/placeholder/gala.jpg";
import galaAndApples from "@a/placeholder/gala-and-apples.jpg";
import galaAndPears from "@a/placeholder/gala-and-pears.jpg";

import galaIntro1 from "@a/placeholder/gala-intro-1.jpg";
import galaIntro2 from "@a/placeholder/gala-intro-2.jpg";
import galaIntro3 from "@a/placeholder/gala-intro-3.jpg";
import galaIntro4 from "@a/placeholder/gala-intro-4.jpg";
import galaIntro5 from "@a/placeholder/gala-intro-5.jpg";

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
			<img src={gala} />
			<p>And Gala knows many different other apples. And Gala knows they're an apple,
				like other apples (one of Gala's so-called ingroups).</p>
			<img src={galaAndApples} />
			<p>Gala also knows the existence of pears, but hasn't really interacted with them
				(again, the outgroup).</p>
			<img src={galaAndPears} />
			<p>We then present Gala a task.</p>
			<img src={galaIntro1} />
			<img src={galaIntro2} />
			<img src={galaIntro3} />
			<img src={galaIntro4} />
			<FruitChart fruitData={
				[
					[{ fruitType: "apple", subType: "unfriendly" }, { fruitType: "apple", subType: "unfriendly" }],
					[{ fruitType: "apple", subType: "neutral" }, { fruitType: "apple", subType: "neutral" }],
					[{ fruitType: "apple", subType: "friendly" }, { fruitType: "apple", subType: "friendly" }],
				]
			} />
			<img src={galaIntro5} />
			<FruitChart fruitData={
				[
					[{ fruitType: "pear", subType: "unfriendly" }],
					[{ fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }, { fruitType: "pear", subType: "neutral" }],
					[{ fruitType: "pear", subType: "friendly" }],
				]
			} />
			<p>...compared to apples, there's less distribution between the three options.
				Thus, Gala believes (AKA biases) that friendliness of the pears (AKA outgroup)
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