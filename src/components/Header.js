import { ReactComponent as MenuIcon } from "../assets/MdiMenu.svg";

function Header() {
  return (
    <header className="main-header">
      <button className="menu-icon">
        <MenuIcon />
      </button>
      <span className="menu-avatar">avatar</span>
    </header>
  );
}

export default Header;
