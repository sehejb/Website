import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";

const App = () => {
  return (
    <main className="bg-black">
      
      <div className="flex flex-col h-screen w-screen">
        <Navbar/>
        <Hero/> 
      </div>
        
      <div className="flex flex-col h-screen w-screen">
        <About/>
      </div>

      <div className="h-screen w-screen">
        <Cards/>
      </div>
        
    </main>
  );
};
export default App;