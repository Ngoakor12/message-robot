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

  function toggleNavMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function closeNav() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

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
            <Route path="/schedule/recipient" element={<RecipientForm />} />
            <Route path="/schedule/message" element={<MessageForm />} />
            <Route path="/schedule/time" element={<DateAndTimeForm />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Home;
