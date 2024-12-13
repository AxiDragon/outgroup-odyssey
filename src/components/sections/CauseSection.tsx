import SliderImage from "../interactables/SliderImage";

import fullBias from "@a/placeholder/cause-full-bias.jpg";
import midBias from "@a/placeholder/cause-mid-bias.jpg";
import noBias from "@a/placeholder/cause-no-bias.jpg";

const CauseSection = () => {
	return (
		<div>
			<h2>RIGHT, THAT MAKES SENSE. BUT WHY?</h2>
			<p>There's many different reasons as to what exactly causes this bias!
				Some are being disputed, others are still being researched.</p>
			<p>One reason is that thinking that an outgroup consists of all the same sorts of people
				is far easier on the brain. You don't have to remember as many things.
				Try messing with the tool below!</p>
			<SliderImage images={[noBias, midBias, fullBias]} />
			<p>See how much <b>easier</b> it is to just summarize a group of people that are all the same?</p>
		</div>
	);
}

export default CauseSection;