import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/About";

const App = () => {
  return (
    <main className="bg-black">
        <div className="flex flex-col h-screen w-screen">
            <Navbar />
            <Hero />   
        </div>
        
        <div className="flex flex-col h-screen w-screen">
          <Projects />
        </div>
        
    </main>
  );
};
export default App;