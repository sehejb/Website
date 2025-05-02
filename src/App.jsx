import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="bg-black">
        <div className="flex flex-col h-screen w-screen">
            <Navbar />
            <Hero />   
        </div>
        
    </main>
  );
};
export default App;