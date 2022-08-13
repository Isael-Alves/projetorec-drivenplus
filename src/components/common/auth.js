import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [dados, setDados] = useState(JSON.parse(window.localStorage.getItem('dados')) || {});
    const [plan, setPlan] = useState([]);

  return <AuthContext.Provider value={{dados, setDados, plan, setPlan}}>{props.children}</AuthContext.Provider>;
};
