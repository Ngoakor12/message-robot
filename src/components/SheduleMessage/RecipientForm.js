import { Link } from "react-router-dom";

function RecipientForm() {
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
          <h2 className="form-heading">Recipient Details</h2>
          <section className="form-body">
            <div className="form-text-input form-name">
              <label for="name">Name </label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-text-wrapper">
              <label>Contact method</label>
              <div className="form-contact-methods">
                <div className="form-text-input form-email">
                  <input
                    type="radio"
                    value="email"
                    id="email"
                    name="send-method"
                  />
                  <label for="email">Email address </label>
                </div>
                <div className="form-text-input form-phone">
                  <input
                    type="radio"
                    value="phone"
                    id="phone"
                    name="send-method"
                  />
                  <label for="phone">Phone number </label>
                </div>
              </div>
            </div>
            <div className="recipient-contact-wrapper">
              <label>Recipient contact </label>
              <div className="form-text-input form-email-input">
                <input type="email" name="email" />
              </div>
              {/* <div className="form-text-input form-phone-input">
                <input type="tel" name="number" />
              </div> */}
            </div>
          </section>
          <section className="form-btns">
            <Link to="/schedule/message" className="primary-btn">
              Next
            </Link>
          </section>
        </form>
      </section>
    </>
  );
}

export default RecipientForm;