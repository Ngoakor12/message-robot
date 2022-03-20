import { NavLink } from "react-router-dom";
import { ReactComponent as TodayIcon } from "../assets/IcRoundToday.svg";
import { ReactComponent as AllMessagesIcon } from "../assets/IcRoundMessage.svg";
import { ReactComponent as DraftsIcon } from "../assets/IcRoundDrafts.svg";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="navigation">
      <NavLink to="/today">
        <span className="nav-icon">
          <TodayIcon />
        </span>
        Today
      </NavLink>
      <NavLink to="/messages">
        <span className="nav-icon">
          <AllMessagesIcon />
        </span>
        All Messages
      </NavLink>
      <NavLink to="/drafts">
        <span className="nav-icon">
          <DraftsIcon />
        </span>
        Drafts
      </NavLink>
    </nav>
  );
}

export default Navigation;
