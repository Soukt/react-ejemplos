import React from "react";

const ContextClass = React.createContext();
const ContextProvider = ContextClass.Provider;
const ContextConsumer = ContextClass.Consumer;

export { ContextProvider, ContextConsumer };
