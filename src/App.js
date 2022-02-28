import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import users from "./mock-data";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Today from "./components/Today";
import AllMessages from "./components/AllMessages";
import Drafts from "./components/Drafts";
import ScheduleMessage from "./components/ScheduleMessage";

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
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
          <Route
            path="/schedule-message"
            element={<ScheduleMessage currentUser={currentUser} />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
