function Navigation({ isMenuOpen }) {
  return (
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
  );
}

export default Navigation;
