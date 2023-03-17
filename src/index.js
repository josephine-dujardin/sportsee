import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StyledGlobalStyle from './assets/style/GlobalStyle';
import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import User from './Pages/Users/Users';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <StyledGlobalStyle/>
    <Menu/>
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="/user/:id" element={<User />} />
    </Routes>
  </Router>
);