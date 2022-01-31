import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const initialNavItems = [
    {
      text: "Today",
      isActive: true,
      icon: "📆",
      path: "/",
      messageCount: 2,
    },
    {
      text: "All messages",
      isActive: false,
      icon: "📃",
      path: "/all-messages",
      messageCount: 0,
    },
    {
      text: "Drafts",
      isActive: false,
      icon: "💼",
      path: "/drafts",
      messageCount: 0,
    },
  ];
  const [navItems, setNavItems] = useState(() => initialNavItems);

  function setActiveTab(path) {
    setNavItems((prevNavItems) => {
      return prevNavItems.map((item) => {
        if (item.path === path) {
          return {
            ...item,
            isActive: true,
          };
        } else {
          return {
            ...item,
            isActive: false,
          };
        }
      });
    });
    setIsMenuOpen(false);
  }

  return (
    <nav className={`nav ${!isMenuOpen && "closed"}`}>
      <ul>
        {navItems.map((item) => {
          return (
            <li
              className={`nav-item ${item.isActive ? "active-nav-tab" : ""}`}
              onClick={() => setActiveTab(item.path)}
            >
              <Link to={item.path}>
                <span className="item-title">
                  <span className="item-icon">{item.icon}</span>
                  {item.text}
                </span>
                <span className="item-count">{item.messageCount}</span>
              </Link>
            </li>
          );
        })}
        {/* <li className="nav-item">
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
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
