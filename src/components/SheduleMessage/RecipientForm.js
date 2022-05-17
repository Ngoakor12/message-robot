import { useContext } from "react";

import { Context } from "../../context";
import { Link } from "react-router-dom";

function RecipientForm() {
  const { addNav, recipient, setRecipient } = useContext(Context);

  function handleRecipientChange(e) {
    let { value, name } = e.target;
    setRecipient((prevRecipient) => ({
      ...prevRecipient,
      [name]: value,
    }));
  }

  console.log(recipient);
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
        <div className="progress-line"></div>
        <p className="form-progress-stage">2</p>
        <div className="progress-line"></div>
        <p className="form-progress-stage">3</p>
      </section>
      {/* <hr className="horizontal-divider" /> */}
      <section className="schedule-messages-form">
        <form id="form">
          <h2 className="form-heading">Recipient Details</h2>
          <section className="form-body">
            <div className="form-text-input form-name">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                id="name"
                name="name"
                value={recipient.name}
                onChange={handleRecipientChange}
              />
            </div>
            <div className="form-text-wrapper">
              <label>Contact method</label>
              <div className="form-contact-methods">
                <div className="form-text-input form-email">
                  <input
                    type="radio"
                    id="email"
                    name="method"
                    value="email"
                    checked={"email"}
                    onChange={handleRecipientChange}
                  />
                  <label htmlFor="email">Email address </label>
                </div>
                {/* <div className="form-text-input form-phone">
                  <input
                    type="radio"
                    value="phone"
                    id="phone"
                    name="method"
                    // checked={"phone"}
                    // onChange={handleRecipientChange}
                    disabled={true}
                  />
                  <label htmlFor="phone">Phone number </label>
                </div> */}
              </div>
            </div>
            <div className="recipient-contact-wrapper">
              <label>Recipient {recipient.method || "contact"} </label>
              <div className="form-text-input form-email-input">
                <input
                  type="email"
                  name="contact"
                  value={recipient.contact}
                  onChange={handleRecipientChange}
                />
              </div>
              {/* <div className="form-text-input form-phone-input">
                <input type="tel" name="number" />
              </div> */}
            </div>
          </section>
          <section className="form-btns exception">
            <Link to="/schedule/message" className="primary-btn">
              Next
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

export default RecipientForm;
