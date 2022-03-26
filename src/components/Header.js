import { ReactComponent as MenuIcon } from "../assets/MdiMenu.svg";

function Header({ toggleNavMenu }) {
  return (
    <header className="main-header">
      <button className="menu-icon" onClick={toggleNavMenu}>
        <MenuIcon />
      </button>
      <span className="menu-avatar">avatar</span>
    </header>
  );
}

export default Header;
