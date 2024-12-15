import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Registration from "./Registration";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
import React from "react";

import Navbar from "./Navbar";


const App = () => {
  return (
    
  );
};

export default App;
