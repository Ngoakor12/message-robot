import { useContext } from "react";

import { Context } from "../../context";
import { Link } from "react-router-dom";

function DateAndTimeForm() {
  const { addNav, date, setDate, finalMessage, setFinalMessage } =
    useContext(Context);

  function handleDateChange(e) {
    let { value, name } = e.target;
    setDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  }

  const toTimeStamp = (dateValue) => {
    if (dateValue) {
      const dateArr = [
        ...dateValue.day.split("-"),
        ...dateValue.time.split(":"),
      ];
      dateArr[1] = parseInt(dateArr[1]) - 1;
      dateArr[2] = parseInt(dateArr[2]) + 1;

      console.log(dateArr);
      return new Date(...dateArr).toISOString();
    }
    return new Date().toISOString();
  };

  function handleSubmit(e) {
    e.preventDefault();
    setFinalMessage((prevFinalMessage) => ({
      ...prevFinalMessage,
      messageId: "hello",
      createdAt: toTimeStamp(),
      sentAt: toTimeStamp({ day: date.day, time: date.time }),
    }));
  }

  console.log(date);
  console.log(finalMessage);

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
        <form id="form" onSubmit={handleSubmit}>
          <h2 className="form-heading">Date and Time</h2>
          <section className="form-body">
            <div className="form-date">
              <label htmlFor="date">Date </label>
              <input
                type="date"
                id="date"
                name="day"
                value={date.day}
                onChange={handleDateChange}
              />
            </div>
            <div className="form-time">
              <label htmlFor="time">Time </label>
              <input
                type="time"
                id="time"
                name="time"
                value={date.time}
                onChange={handleDateChange}
              />
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
