import Header from './component/Header';
import TeamHero from './component/TeamHero';
import TeamMembers from './component/TeamMembers';
import ProjectShowcase from './component/ProjectShowcase';
import WorkProcess from './component/WorkProcess';
import ContactSection from './component/ContactSection';
import './App.css';
import PricingSection from './component/PricingSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TeamHero />
        <PricingSection/>
        <TeamMembers />
        <ProjectShowcase />
        <WorkProcess />
        <ContactSection />
      </main>
    </div>
  );
}

export default App; 