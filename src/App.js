import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import "./App.css";
import { LanguageProvider } from "./containers/Language";
import LanguageSelector from "./components/LanguageSelector";
import Explore from "./components/Explore";
import { Text } from "./containers/Language";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/"  element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
          <LanguageSelector />
          <Explore />
        </header>
      </div>
    </LanguageProvider>
  );
}

function Layout() {



  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><Text tid="Home" /></Link>
          </li>
          <li>
            <Link to="/about"><Text tid="About" /></Link>
          </li>
          <li>
            <Link to="/contact"><Text tid="Contact" /></Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
