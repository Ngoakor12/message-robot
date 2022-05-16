import { useContext } from "react";

import { Context } from "../../context";
import { Link } from "react-router-dom";

function MessageForm() {
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
        <div className="progress-line"></div>
        <p className="form-progress-stage">3</p>
      </section>
      {/* <hr className="horizontal-divider" /> */}
      <section className="schedule-messages-form">
        <form id="form">
          <h2 className="form-heading">Message</h2>
          <section className="form-body">
            <div className="form-text-input form-subject">
              <label htmlFor="subject">Subject </label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-text-input form-message">
              <label htmlFor="message">Message </label>
              <input type="text" id="message" name="message" />
            </div>
            <div className="form-text-input form-sender">
              <label htmlFor="sender">From </label>
              <input type="text" id="sender" name="sender" />
            </div>
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
      <Link to="/today" className="top-secondary-btn" onClick={addNav}>
        Cancel
      </Link>
    </>
  );
}

export default MessageForm;
