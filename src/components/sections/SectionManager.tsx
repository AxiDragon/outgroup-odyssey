import { useState } from "react";
import Section from "./Section"
import TopicSection from "./TopicSection";
import TitleCard from "../TitleCard";
import Credits from "../Credits";
import CauseSection from "./CauseSection";
import EffectSection from "./EffectSection";
import SolutionSection from "./SolutionSection";
import SummarySection from "./SummarySection";

const SectionManager = () => {
	const [currentSection, setCurrentSection] = useState(0);

	const onClickNavigation = (direction: -1 | 1) => {
		const newSection = currentSection + direction;
		setCurrentSection(newSection);

		setTimeout(() => {
			window.scrollTo(0, direction === 1 ? 0 : document.body.scrollHeight);
		}, 0);
	}

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<Section onClickNavigation={onClickNavigation}
				disabledNavButtons="back"
				style={{ display: currentSection === 0 ? 'block' : 'none' }}>
				<TitleCard />
				<TopicSection />
			</Section>
			<Section onClickNavigation={onClickNavigation}
				style={{ display: currentSection === 1 ? 'block' : 'none' }}>
				<CauseSection />
			</Section>
			<Section onClickNavigation={onClickNavigation}
				style={{ display: currentSection === 2 ? 'block' : 'none' }}>
				<EffectSection />
			</Section>
			<Section onClickNavigation={onClickNavigation}
				style={{ display: currentSection === 3 ? 'block' : 'none' }}>
				<SolutionSection />
			</Section>
			<Section onClickNavigation={onClickNavigation}
				style={{ display: currentSection === 4 ? 'block' : 'none' }}>
				<SummarySection />
			</Section>
			<Section onClickNavigation={onClickNavigation}
				disabledNavButtons="next"
				style={{ display: currentSection === 5 ? 'block' : 'none' }}>
				{/* TODO: Credits should definitely be a seperate section */}
				<Credits />
			</Section>
		</div>
	)
};

export default SectionManager;