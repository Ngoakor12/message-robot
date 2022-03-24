import { Link } from "react-router-dom";

function DateAndTimeForm({ addNav }) {
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
      <hr className="horizontal-divider" />
      <section className="schedule-messages-form">
        <form id="form">
          <h2 className="form-heading">Date and Time</h2>
          <section className="form-body">
            <label htmlFor="date">Date </label>
            <input type="date" id="date" name="date" />
            <label htmlFor="time">Time </label>
            <input type="time" id="time" name="time" />
          </section>
          <section className="form-btns main">
            <button className="primary-btn">Schedule message</button>
            <button className="secondary-btn">Save to drafts</button>
            <Link to="/schedule/message" className="secondary-btn">
              Back
            </Link>
          </section>
        </form>
      </section>
      <Link
        to="/today"
        className="top-secondary-btn"
        onClick={addNav}
      >
        Cancel
      </Link>
    </>
  );
}

export default DateAndTimeForm;
