import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../context";
import Header from "./Header";
import Navigation from "./Navigation";
import Today from "./Today";
import AllMessages from "./AllMessages";
import Drafts from "./Drafts";
import ScheduleMessage from "./ScheduleMessage";
import RecipientForm from "./SheduleMessage/RecipientForm";
import MessageForm from "./SheduleMessage/MessageForm";
import DateAndTimeForm from "./SheduleMessage/DateAndTimeForm";

function Home() {
  const { isNavRemoved, addNav } = useContext(Context);

  return (
    <>
      <Header />
      <main className="main">
        <Navigation />
        <section
          className={
            isNavRemoved ? "main-section main-nav-removed" : "main-section"
          }
        >
          <Routes>
            <Route exact path="/today" element={<Today />} />
            <Route path="/messages" element={<AllMessages />} />
            <Route path="/drafts" element={<Drafts />} />
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
