import { useContext } from "react";

import { Context } from "../../context";
import { Link } from "react-router-dom";

function DateAndTimeForm() {
  const { addNav } = useContext(Context);

  return (
    <>
      <header className="heading">
        <div className="heading-left">
          <h1 className="heading-title">Schedule message</h1>
        </div>
        <Link to="/today" className="secondary-btn cancel-btn" onClick={addNav}>
          Cancel
        </Link>
      </header>
      <section className="form-progress">
        <p className="form-progress-stage progress-stage-done">1</p>
        <div className="progress-line progress-line-done"></div>
        <p className="form-progress-stage progress-stage-done">2</p>
        <div className="progress-line progress-line-done"></div>
        <p className="form-progress-stage progress-stage-done">3</p>
      </section>
      {/* <hr className="horizontal-divider" /> */}
      <section className="schedule-messages-form">
        <form id="form">
          <h2 className="form-heading">Date and Time</h2>
          <section className="form-body">
            <div className="form-date">
              <label htmlFor="date">Date </label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-time">
              <label htmlFor="time">Time </label>
              <input type="time" id="time" name="time" />
            </div>
          </section>
          <section className="form-btns normal">
            <button className="primary-btn">Schedule message</button>
            <button className="secondary-btn">Save to drafts</button>
            <Link to="/schedule/message" className="secondary-btn">
              Back
            </Link>
          </section>
        </form>
      </section>
      <Link to="/today" className="top-secondary-btn" onClick={addNav}>
        Cancel
      </Link>
    </>
  );
}

export default DateAndTimeForm;
