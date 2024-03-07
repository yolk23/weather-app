import "./App.css";
import MainContent from "./components/MainContent";

import Footer from "./components/Footer";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <MainContent />

      <Weather />
      <Footer />
    </div>
  );
}

export default App;
