import "./App.css";
import users from "./mock-data";
import Header from "./components/Header";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Today from "./components/Today";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleIsMenuOpen() {
    setIsMenuOpen((prevState) => !prevState);
  }

  const currentUser = users.find((user) => user.name === "Ngoako");

  return (
    <div className="App">
      <Header toggleIsMenuOpen={toggleIsMenuOpen} />
      <section className="main-content">
        <Navigation isMenuOpen={isMenuOpen} />
        <Today currentUser={currentUser} />
      </section>
    </div>
  );
}

export default App;
