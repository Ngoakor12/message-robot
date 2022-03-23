function DateAndTimeForm() {
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
          <h2 className="form-heading">Date and Time</h2>
          <section className="form-body">
            <label for="date">Date </label>
            <input type="date" id="date" name="date" />
            <label for="time">Time </label>
            <input type="time" id="time" name="time" />
          </section>
          <section>
            <button className="primary-btn">Schedule message</button>
            <button className="secondary-btn">Save to drafts</button>
            <button>Back</button>
          </section>
        </form>
      </section>
    </>
  );
}

export default DateAndTimeForm;
