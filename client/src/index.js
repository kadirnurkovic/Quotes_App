import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Logout from "./components/LoginPage/Logout"
import { QuotesContextProvider } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuotesContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/quotespage" element={<Logout />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </QuotesContextProvider>
);
