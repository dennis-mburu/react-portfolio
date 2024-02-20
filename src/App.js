import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
      </main>
    </div>
  );
}

export default App;
