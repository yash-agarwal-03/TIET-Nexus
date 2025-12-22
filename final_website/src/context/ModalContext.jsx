import { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  // ESC key support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLogin();
    };

    if (isLoginOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isLoginOpen]);

  return (
    <ModalContext.Provider
      value={{ isLoginOpen, openLogin, closeLogin }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
