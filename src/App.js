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

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
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
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
