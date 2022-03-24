import { Link } from "react-router-dom";

function MessageForm({ addNav }) {
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
          <h2 className="form-heading">Message</h2>
          <section className="form-body">
            <label htmlFor="subject">Subject </label>
            <input type="text" id="subject" name="subject" />
            <label htmlFor="message">Message </label>
            <input type="text" id="message" name="message" />
            <label htmlFor="sender">From </label>
            <input type="text" id="sender" name="sender" />
          </section>
          <section className="form-btns exception">
            <Link to="/schedule/time" className="primary-btn">
              Next
            </Link>
            <Link to="/schedule/recipient" className="secondary-btn">
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

export default MessageForm;
