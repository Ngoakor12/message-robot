import Header from "./Header";
import Navigation from "./Navigation";
import Today from "./Today";
import AllMessages from "./AllMessages";
import Drafts from "./Drafts";
import ScheduleMessage from "./ScheduleMessage";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import RecipientForm from "./SheduleMessage/RecipientForm";
import MessageForm from "./SheduleMessage/MessageForm";
import DateAndTimeForm from "./SheduleMessage/DateAndTimeForm";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavRemoved, setIsNavRemoved] = useState(false);

  function toggleNavMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function closeNav() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function removeNav() {
    setIsNavRemoved(true);
  }
  function addNav() {
    setIsNavRemoved(false);
  }

  return (
    <>
      <Header toggleNavMenu={toggleNavMenu} isMenuOpen={isMenuOpen} />
      <main className="main">
        <Navigation
          isMenuOpen={isMenuOpen}
          closeNav={closeNav}
          // buttonPosition={"side"}
          isNavRemoved={isNavRemoved}
          addNav={addNav}
        />
        <section
          className={
            isNavRemoved ? "main-section main-nav-removed" : "main-section"
          }
        >
          <Routes>
            <Route
              exact
              path="/today"
              element={
                <Today removeNav={removeNav} isNavRemoved={isNavRemoved} />
              }
            />
            <Route
              path="/messages"
              element={<AllMessages removeNav={removeNav} />}
            />
            <Route path="/drafts" element={<Drafts removeNav={removeNav} />} />
            <Route path="/schedule" element={<ScheduleMessage />} />
            <Route
              path="/schedule/recipient"
              element={<RecipientForm addNav={addNav} />}
            />
            <Route
              path="/schedule/message"
              element={<MessageForm addNav={addNav} />}
            />
            <Route
              path="/schedule/time"
              element={<DateAndTimeForm addNav={addNav} />}
            />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Home;
