import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import "./App.css";
import { LanguageProvider } from "./containers/Language";
import LanguageSelector from "./components/LanguageSelector";
import Explore from "./components/Explore";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <LanguageSelector />
          <Explore />
        </header>
      </div>
    </LanguageProvider>
  );
}

export default App;
