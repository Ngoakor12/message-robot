import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavRemoved, setIsNavRemoved] = useState(false);
  const [recipient, setRecipient] = useState({
    name: "",
    method: "",
    contact: "",
  });
  const [message, setMessage] = useState({
    subject: "",
    message: "",
    from: "",
  });
  const [date, setDate] = useState({
    time: "",
    day: "",
  });

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
