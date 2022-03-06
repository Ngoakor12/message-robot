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
  const currentUser = users.find((user) => user.name === "Ngoako");

  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <Navigation />
        <Routes>
          <Route
            exact
            path="/today"
            element={<Today currentUser={currentUser} />}
          />
          <Route
            path="/messages"
            element={<AllMessages currentUser={currentUser} />}
          />
          <Route
            path="/drafts"
            element={<Drafts currentUser={currentUser} />}
          />
          <Route
            path="/schedule"
            element={<ScheduleMessage currentUser={currentUser} />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
