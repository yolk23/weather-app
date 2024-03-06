import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <MainContent />
      <Navbar />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
