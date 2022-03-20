import Header from "./Header";
import Navigation from "./Navigation";
import Today from "./Today";
import AllMessages from "./AllMessages";
import Drafts from "./Drafts";
import ScheduleMessage from "./ScheduleMessage";

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="messages">
        <Routes>
          <Route exact path="/today" element={<Today />} />
          <Route path="/messages" element={<AllMessages />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/schedule" element={<ScheduleMessage />} />
        </Routes>
      </main>
    </>
  );
}

export default Home;
