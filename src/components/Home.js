import Header from "./Header";
import Navigation from "./Navigation";
import Today from "./Today";
import AllMessages from "./AllMessages";
import Drafts from "./Drafts";
import ScheduleMessage from "./ScheduleMessage";
import ScheduleMessageButton from "./ScheduleMessageButton";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [buttonPosition, seButtonPosition] = useState("main");

  function toggleNavMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function closeNav() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  console.log(isMenuOpen);

  return (
    <>
      <Header toggleNavMenu={toggleNavMenu} isMenuOpen={isMenuOpen} />
      <main className="main">
        <Navigation
          isMenuOpen={isMenuOpen}
          closeNav={closeNav}
          buttonPosition={"side"}
        />
        <section className="main-section">
          <Routes>
            <Route exact path="/today" element={<Today />} />
            <Route path="/messages" element={<AllMessages />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/schedule" element={<ScheduleMessage />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Home;
