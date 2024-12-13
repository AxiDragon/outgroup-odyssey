import ImageSlideShow from "@c/interactables/ImageSlideShow";

import gala from "@a/placeholder/gala.jpg";
import galaAndApples from "@a/placeholder/gala-and-apples.jpg";
import galaAndPears from "@a/placeholder/gala-and-pears.jpg";

import galaIntro1 from "@a/placeholder/gala-intro-1.jpg";
import galaIntro2 from "@a/placeholder/gala-intro-2.jpg";
import galaIntro3 from "@a/placeholder/gala-intro-3.jpg";
import galaIntro4 from "@a/placeholder/gala-intro-4.jpg";
import galaIntro4Graph from "@a/placeholder/gala-intro-4g.jpg";
import galaIntro5 from "@a/placeholder/gala-intro-5.jpg";
import galaIntro5Graph from "@a/placeholder/gala-intro-5g.jpg";

import interactable1 from "@a/placeholder/intro-interactable-1.jpg";
import interactable2 from "@a/placeholder/intro-interactable-2.jpg";
import interactable3 from "@a/placeholder/intro-interactable-3.jpg";
import interactable4 from "@a/placeholder/intro-interactable-4.jpg";

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
			<img src={galaIntro4Graph} />
			<img src={galaIntro5} />
			<img src={galaIntro5Graph} />
			<p>...compared to apples, there's less distribution between the three options.
				Thus, Gala believes (AKA biases) that the baking skills of the pears (AKA outgroup)
				are more similar (AKA homogenous) than those of the apples.</p>
			<p>But, in reality, when we makes all fruits attempt to make their most delicious cakes...</p>
			<ImageSlideShow images={[interactable1, interactable2, interactable3, interactable4]} />
			<p>...we see that the pears are just as diverse in their baking skills as the apples.</p>
			<p>Even if it intuitively seems correct to lump a group into the same category,
				they're actually just as unique as the other group.</p>
		</div>
	);
}

export default TopicSection;