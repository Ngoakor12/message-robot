import ScheduleMessageButton from "./ScheduleMessageButton";

function Drafts() {
  return (
    <>
      <header className="heading">
        <div className="heading-left">
          <h1 className="heading-title">Drafts</h1>
          <span className="heading-title-date">23 Jan Mon</span>
        </div>
        <ScheduleMessageButton buttonPosition="main-section-btn" />
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
      <ScheduleMessageButton buttonPosition="bottom-section-btn" />
    </>
  );
}

export default Drafts;
