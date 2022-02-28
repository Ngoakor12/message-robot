import ScheduleMessageButton from "./ScheduleMessageButton";

function ScheduleMessage({ currentUser }) {
  return (
    <main className="main">
      <header className="today-header">
        <div className="header-title">
          <h1 className="heading-title">Schedule message</h1>
        </div>
      </header>
      <section className="messages-form">
        <form id="form">
          <section>
            <label for="name">Recipient name </label>
            <input type="text" id="name" />
            <label>Contact method</label>
            <input type="radio" value="email" id="email" name="send-method" />
            <label for="email">Email address </label>
            <input type="radio" value="phone" id="phone" name="send-method" />
            <label for="phone">Phone number </label>
            <label>Recipient contact </label>
            <input type="email" name="email" />
            <input type="tel" name="number" />
          </section>
          <section>
            <label for="subject">Subject </label>
            <input type="text" id="subject" name="subject" />
            <label for="message">Message </label>
            <input type="text" id="message" name="message" />
            <label for="sender">From </label>
            <input type="text" id="sender" name="sender" />
          </section>
          <section>
            <label for="date">Date </label>
            <input type="date" id="date" name="date" />
            <label for="time">Time </label>
            <input type="time" id="time" name="time" />
          </section>
          <section>
            <button>Schedule message</button>
            <button>Save to drafts</button>
            <button>Cancel</button>
          </section>
        </form>
      </section>
    </main>
  );
}

export default ScheduleMessage;
