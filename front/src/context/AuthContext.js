import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  // Tente obter o estado inicial do localStorage
  const storedState = JSON.parse(localStorage.getItem("authState")) || INITIAL_STATE;

  const [state, dispatch] = useReducer(AuthReducer, storedState);

  // Adicione um listener para armazenar o estado no localStorage sempre que ele for alterado
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
