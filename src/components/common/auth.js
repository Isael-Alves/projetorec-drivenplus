import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [dados, setDados] = useState(JSON.parse(window.localStorage.getItem('dados')) || {}); 
    const [screen, setScreen] = useState('');

  return <AuthContext.Provider value={{dados, setDados, screen, setScreen}}>{props.children}</AuthContext.Provider>;
};
