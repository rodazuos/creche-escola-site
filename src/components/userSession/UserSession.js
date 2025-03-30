"use client";

import { useContext } from "react";
import SessionContext from "../SessionContext";

export function UserProvider({ children, user }) {
  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
}

export function UserSession() {
  const context = useContext(SessionContext);
  if (!context) {
    console.log("Nenhum contexto informado!");
  }
  return context;
}
