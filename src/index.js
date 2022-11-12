import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/configStore";
import "./styles.css"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>

            <App />

        </Provider>
    </StrictMode>
)