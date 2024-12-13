import TitleCard from "@c/TitleCard";
import TopicSection from "@/components/sections/TopicSection";
import CauseSection from "@/components/sections/CauseSection";
import EffectSection from "@/components/sections/EffectSection";
import SolutionSection from "@/components/sections/SolutionSection";
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
