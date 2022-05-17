import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavRemoved, setIsNavRemoved] = useState(false);
  const [recipient, setRecipient] = useState({
    name: "",
    method: "email",
    contact: "",
  });
  const [message, setMessage] = useState({
    subject: "",
    body: "",
    from: "",
  });
  const [date, setDate] = useState({
    time: "",
    day: "",
  });
  const [finalMessage, setFinalMessage] = useState({
    messageId: "m1",
    userId: "u1",
    recipient: {
      name: "",
      contact: "",
      method: "email",
    },
    content: {
      subject: "",
      body: "",
      from: "",
    },
    createdAt: "",
    date: {
      day: "",
      time: "",
    },
  });

  useEffect(() => {
    setFinalMessage((prevFinalMessage) => ({
      ...prevFinalMessage,
      recipient: recipient,
      content: message,
      date: date,
    }));
  }, [message, recipient, date]);

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
        recipient,
        setRecipient,
        message,
        setMessage,
        date,
        setDate,
        finalMessage,
        setFinalMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
