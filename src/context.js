import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavRemoved, setIsNavRemoved] = useState(false);

  function toggleNavMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function closeNav() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  function removeNav() {
    setIsNavRemoved(true);
  }
  function addNav() {
    setIsNavRemoved(false);
  }
  return (
    <Context.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isNavRemoved,
        setIsNavRemoved,
        toggleNavMenu,
        closeNav,
        removeNav,
        addNav,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
