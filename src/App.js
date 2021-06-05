import React from 'react'
import { HashRouter as Router } from "react-router-dom";
import Routes from "./components/routes"


export default function App() {

  return (
      <Router>
        <Routes />
      </Router>
  )
}
