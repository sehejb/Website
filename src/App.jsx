import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <main className="bg-black">
      
      <div className="flex flex-col min-h-screen w-screen">
        <Navbar/>
        <section className="flex-1">
          <Hero/> 
        </section>  
      </div>
        
      <div className="flex flex-col h-screen w-screen">
        <About/>
      </div>
        
    </main>
  );
};
export default App;