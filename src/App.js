import "./App.css";
import users from "./mock-data";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);
  function toggleIsMenuOpen() {
    setIsMenuOpen((prevState) => !prevState);
  }

  const currentUser = users.find((user) => user.name === "Ngoako");
  return (
    <div className="App">
      <header className="main-header">
        <span className="menu-icon" onClick={toggleIsMenuOpen}>
          🍔
        </span>
        <span className="menu-avatar">👦🏾</span>
      </header>
      <section className="main-content">
        <nav className={`nav ${!isMenuOpen && "closed"}`}>
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
              <span className="heading-title-date">23 Jan Mon</span>
            </div>
            <button className="schedule-message">
              <span className="schedule-message-icon">📝</span>Schedule message
            </button>
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
      </section>
    </div>
  );
}

export default App;
