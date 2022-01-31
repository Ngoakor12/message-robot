function Header({ toggleIsMenuOpen }) {
  return (
    <header className="main-header">
      <span className="menu-icon" onClick={toggleIsMenuOpen}>
        🍔
      </span>
      <span className="menu-avatar">👦🏾</span>
    </header>
  );
}

export default Header;
