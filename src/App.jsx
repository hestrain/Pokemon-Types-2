import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import './App.css'
import React from 'react'


const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
  </>
  );
};

export default App;
