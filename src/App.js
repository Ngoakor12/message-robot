import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import users from "./mock-data";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Today from "./components/Today";
import AllMessages from "./components/AllMessages";
import Drafts from "./components/Drafts";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleIsMenuOpen() {
    setIsMenuOpen((prevState) => !prevState);
  }

  const currentUser = users.find((user) => user.name === "Ngoako");

  return (
    <div className="App">
      <Header toggleIsMenuOpen={toggleIsMenuOpen} />
      <section className="main-content">
        <Navigation isMenuOpen={isMenuOpen} />
        <Routes>
          <Route exact path="/" element={<Today currentUser={currentUser} />} />
          <Route
            path="/all-messages"
            element={<AllMessages currentUser={currentUser} />}
          />
          <Route
            path="/drafts"
            element={<Drafts currentUser={currentUser} />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
