import TitleCard from "@c/TitleCard";
import TopicSection from "@c/TopicSection";
import CauseSection from "@c/CauseSection";
import EffectSection from "@c/EffectSection";
import SolutionSection from "@c/SolutionSection";
import Credits from "@c/Credits";

import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <div className="App">
        <TitleCard />
        <TopicSection />
        <CauseSection />
        <EffectSection />
        <SolutionSection />
        <Credits />
      </div>
    </div>
  );
}

export default App;
