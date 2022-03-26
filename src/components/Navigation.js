import { NavLink } from "react-router-dom";
import { ReactComponent as TodayIcon } from "../assets/IcRoundToday.svg";
import { ReactComponent as AllMessagesIcon } from "../assets/IcRoundMessage.svg";
import { ReactComponent as DraftsIcon } from "../assets/IcRoundDrafts.svg";

function Navigation({ isMenuOpen, closeNav, isNavRemoved }) {
  return (
    <nav
      className={
        isNavRemoved
          ? "remove-nav"
          : isMenuOpen
          ? "navigation active-navigation"
          : "navigation"
      }
    >
      <NavLink
        to="/today"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
        onClick={closeNav}
      >
        <span className="nav-item-left">
          <span className="nav-icon">
            <TodayIcon />
          </span>
          Today
        </span>
        <span className="message-count">4</span>
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
        onClick={closeNav}
      >
        <span className="nav-item-left">
          <span className="nav-icon">
            <AllMessagesIcon />
          </span>
          All Messages
        </span>
        <span className="message-count">10</span>
      </NavLink>
      <NavLink
        to="/drafts"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
        onClick={closeNav}
      >
        <span className="nav-item-left">
          <span className="nav-icon">
            <DraftsIcon />
          </span>
          Drafts
        </span>
        <span className="message-count">10</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
