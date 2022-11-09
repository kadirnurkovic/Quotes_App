import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Logout from "./components/LoginPage/Logout"
import { QuotesContextProvider } from "./Context/Context";
import Quote from "./components/LoginPage/CreateQuotePage/Quote"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuotesContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/quotespage" element={<Logout />}></Route>
          <Route path="/createquote" element={<Quote />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </QuotesContextProvider>
);
