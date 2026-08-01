import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDom from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Authprovider } from "./context/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authprovider>
  </StrictMode>
);
