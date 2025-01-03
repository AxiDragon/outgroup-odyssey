import MemoryGraphSlider from "@c/interactables/MemoryGraphSlider";
import Footnote from "../Footnote";

const CauseSection = () => {
	return (
		<div className="Section">
			<div className="SectionText">
				<h2>RIGHT, THAT MAKES SENSE. BUT WHY?</h2>
				<p>One might think that outgroup homogeneity bias exists simply don't interact much with outgroups,
					and therefore don't know people from outgroups as well.
					However, it is unsure if this is the main cause of the bias, as it still occurs in groups that
					frequently interact with each other, like men and women.<Footnote referenceId={2} /></p>
				<p>A reason that has more consensus is that it's far easier on the brain to
					think that an outgroup consists	of all the same sorts of people.
					You don't have to remember as many things.<Footnote referenceId={3} /></p>
				<p>Try messing with the tool below!</p>
			</div>
			<MemoryGraphSlider />
		</div>
	);
}

export default CauseSection;