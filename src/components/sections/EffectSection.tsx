import SliderImage from "@c/interactables/SliderImage";

import fullBias from "@a/placeholder/effect-full-bias.jpg";
import midBias from "@a/placeholder/effect-mid-bias.jpg";
import noBias from "@a/placeholder/effect-no-bias.jpg";

const EffectSection = () => {
	return (
		<div>
			<h2>YOU'RE MAKING IT SOUND LIKE A GOOD THING. WHAT'S THE CATCH?</h2>
			<p>Yeah, it's true that your brain uses the bias to conserve memory space.
				But, by doing this, it also generalizes people from outgroups.
				A person from an outgroup becomes 'just another one of those'.</p>
			<p>What this results in is that we feel less empathy for people
				of outgroups, which, in turn, can lead to discrimination.</p>
			<p>What if Gala was actually a cooking teacher of all the pears, and they needed
				to sort the apples and pears into three groups to ensure each pear has sufficient challenge?</p>
			<SliderImage images={[noBias, midBias, fullBias]} />
			<p>
				<i><span style={{ color: 'red' }}>red:</span> too much challenge,
					<span style={{ color: 'blue' }}> blue</span>: too little challenge</i>
			</p>
			<p>If Gala's bias shone through, it could result in some pears stressing out from the pressure,
				and other pears being bored to death!</p>
			<p>This could, in turn, result in long-term disadvantages.</p>
			<p><i>(Of course, there's more causes to this than just this bias,
				but outgroup homogeneity bias does play a part.)</i></p>
		</div>
	);
}

export default EffectSection;