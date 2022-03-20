import { NavLink } from "react-router-dom";
import { ReactComponent as TodayIcon } from "../assets/IcRoundToday.svg";
import { ReactComponent as AllMessagesIcon } from "../assets/IcRoundMessage.svg";
import { ReactComponent as DraftsIcon } from "../assets/IcRoundDrafts.svg";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav>
      <NavLink to="/today">
        <span>
          <TodayIcon />
        </span>
        Today
      </NavLink>
      <NavLink to="/messages">
        <span>
          <AllMessagesIcon />
        </span>
        All Messages
      </NavLink>
      <NavLink to="/drafts">
        <span>
          <DraftsIcon />
        </span>
        Drafts
      </NavLink>
    </nav>
  );
}

export default Navigation;
