import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
