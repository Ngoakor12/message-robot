import ScheduleMessageButton from "./ScheduleMessageButton";

function Drafts({ currentUser }) {
  return (
    <main className="main">
      <header className="today-header">
        <div className="header-title">
          <h1 className="heading-title">Drafts</h1>
        </div>
        <ScheduleMessageButton />
      </header>
      <section className="messages">
        {currentUser.messages.map((message) => {
          return (
            <div className="message" key={message.messageId}>
              <div className="message-state-icon">✅</div>
              <div className="message-summary">
                <h2>{message.subject}</h2>
                <div className="message-date-time">
                  <span>⌚ {message.time}</span>
                  {"   "}
                  <span>📅 {message.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Drafts;
