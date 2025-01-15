import { useEffect, useState } from "react";
import Section from "./Section"
import TopicSection from "./TopicSection";
import TitleCard from "../TitleCard";
import Credits from "../Credits";
import CauseSection from "./CauseSection";
import EffectSection from "./EffectSection";
import SolutionSection from "./SolutionSection";
import SummarySection from "./SummarySection";

function getSectionFromUrl() {
	const params = new URLSearchParams(window.location.search);
	return parseInt(params.get('section') || '0');
};

const SectionManager = () => {
	const [currentSection, setCurrentSection] = useState(getSectionFromUrl());

	useEffect(() => {
		const onPopState = () => {
			setCurrentSection(getSectionFromUrl());
		}

		window.addEventListener('popstate', onPopState);

		return () => {
			window.removeEventListener('popstate', onPopState);
		}
	}, []);

	useEffect(() => {

	}, [currentSection]);

	const onClickNavigation = (direction: -1 | 1) => {
		const newSection = currentSection + direction;

		const params = new URLSearchParams(window.location.search);
		params.set('section', newSection.toString());
		const newUrl = `${window.location.pathname}?${params.toString()}`;

		window.history.pushState({}, '', newUrl);

		setCurrentSection(newSection);

		if (direction === 1) {
			// using setTimeout here makes the document maintain the height of the previous section
			// for some reason, this is necessary for the scroll to work properly
			window.scrollTo(0, 0);
		} else {
			setTimeout(() => {
				window.scrollTo(0, document.body.scrollHeight);
			}, 0);
		}

		setTimeout(() => {
			window.dispatchEvent(new Event('navigationClicked')); //let new section load in
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
				<Credits />
			</Section>
		</div>
	)
};

export default SectionManager;