import "./App.css";
import users from "./mock-data";

function App() {
  const currentUser = users.find((user) => user.name === "Ngoako");
  // console.log(currentUser);
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <a href="#">
              <span className="item-title">
                <span className="item-icon">📆</span>
                Today
              </span>
              <span className="item-count">2</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <span className="item-title">
                <span className="item-icon">📃</span>
                All messages
              </span>
              <span className="item-count">0</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <span className="item-title">
                <span className="item-icon">💼</span>
                Drafts
              </span>
              <span className="item-count">0</span>
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <header className="today-header">
          <div className="header-title">
            <h1 className="heading-title">Today</h1>
            <span>23 Jan Mon</span>
          </div>
          <button className="schedule-message">Schedule message</button>
        </header>
        <section className="messages">
          {currentUser.messages.map((message) => {
            return (
              <div className="message" key={message.messageId}>
                <h2>{message.subject}</h2>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
