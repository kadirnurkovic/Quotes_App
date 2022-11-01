import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/LoginPage/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    
    <Route path="/" element={<Login />}></Route>
    </Routes>
    </Router>
  </React.StrictMode>
);

