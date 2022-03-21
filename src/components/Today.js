import ScheduleMessageButton from "./ScheduleMessageButton";

function Today() {
  return (
    <>
      <header className="heading">
        <div className="heading-left">
          <h1 className="heading-title">Today</h1>
          <span className="heading-title-date">23 Jan Mon</span>
        </div>
        <ScheduleMessageButton />
      </header>
      <hr className="horizontal-divider" />
      <section className="messages">
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
        <div className="message">
          <h2>Mom's birthday</h2>
        </div>
      </section>
    </>
  );
}

export default Today;
