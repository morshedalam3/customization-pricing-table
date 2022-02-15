import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import PricingTable from './Components/PricingTable/PricingTable';

function App() {
  return (
    <div>
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/pricing" element={<PricingTable/>}/>
     </Routes>
   </Router>
    </div>
  );
}

export default App;
