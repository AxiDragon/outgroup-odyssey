import TitleCard from "@c/TitleCard";
import TopicSection from "@c/sections/TopicSection";
import CauseSection from "@c/sections/CauseSection";
import EffectSection from "@c/sections/EffectSection";
import SolutionSection from "@c/sections/SolutionSection";
import SummarySection from "@c/sections/SummarySection";
import Credits from "@c/Credits";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TitleCard />
      <TopicSection />
      <CauseSection />
      <EffectSection />
      <SolutionSection />
      <SummarySection />
      <Credits />
    </div>
  );
}

export default App;
