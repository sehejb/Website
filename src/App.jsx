import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import AboutMe from "./components/AboutMe"
import ExperienceTerminal from "./components/ExperienceTerminal"

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

      <div className="h-screen w-screen">
        <Cards/>
      </div>
        
    </main>
  );
};
export default App;