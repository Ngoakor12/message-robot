import { Link } from "react-router-dom";

function MessageForm() {
  return (
    <>
      <header className="heading">
        <div className="heading-left">
          <h1 className="heading-title">Schedule message</h1>
        </div>
        <button className="secondary-btn">Cancel</button>
      </header>
      <hr className="horizontal-divider" />
      <section className="schedule-messages-form">
        <form id="form">
          <h2 className="form-heading">Message</h2>
          <section className="form-body">
            <label for="subject">Subject </label>
            <input type="text" id="subject" name="subject" />
            <label for="message">Message </label>
            <input type="text" id="message" name="message" />
            <label for="sender">From </label>
            <input type="text" id="sender" name="sender" />
          </section>
          <section className="form-btns">
            <Link to="/schedule/recipient" className="secondary-btn">Back</Link>
            <Link to="/schedule/time" className="primary-btn">Next</Link>
          </section>
        </form>
      </section>
    </>
  );
}

export default MessageForm;
