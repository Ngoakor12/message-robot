import ScheduleMessageButton from "./ScheduleMessageButton";

import { Link } from "react-router-dom";

function Today({ removeNav, addNav }) {
  return (
    <>
      <header className="heading">
        <div className="heading-left">
          <h1 className="heading-title">Today</h1>
          <span className="heading-title-date">23 Jan Mon</span>
        </div>
        <Link
          to="/schedule/recipient"
          className="primary-btn schedule-message-btn main-section-btn"
          onClick={removeNav}
        >
          Schedule message
        </Link>
      </header>
      <hr className="horizontal-divider" />
      <section className="messages">
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
      </section>
      <Link
        to="/schedule/recipient"
        className="primary-btn schedule-message-btn bottom-section-btn"
        onClick={removeNav}
      >
        Schedule message
      </Link>
    </>
  );
}

export default Today;
