"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
const ReduxStoreProvider = ({ children }) => {
    return (_jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: _jsx("div", { children: "Loading..." }), persistor: persistor, children: children }) }));
};
export default ReduxStoreProvider;
