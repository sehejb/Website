import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe"
import ExperienceTerminal from "./components/ExperienceTerminal"
import SystemOff from "./components/SystemOff"

const App = () => {
  return (
    <main style={{
    background:"linear-gradient(135deg, #0d1117 0%, #161b22 100%)"}}>
      
      <div className="flex flex-col h-screen w-screen">
        <Navbar/>
        <Hero/> 
      </div>

      <div className="flex flex-col h-screen w-screen">
        <AboutMe/>
      </div>

      <div className="flex justify-center items-center h-screen w-screen">
        <ExperienceTerminal/>
      </div>

      <div className="w-full h-[50vh]">
        <SystemOff/>
      </div>
    </main>
  );
};
export default App;