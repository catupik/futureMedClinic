

import './App.css';
import Appointment from './Appointment';
import Home from './Home';
import Contact from './Contact';
import { data } from './data';
import MyAccount from './MyAccount';
import Services from './Services';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Team from './Team';
import { useState } from "react";
import { dataService } from "./dataService";
import LogIn from './LogIn';

function App() {
  const [services, setServices] = useState(dataService);
  const [doctors, setDoctors] = useState(data);
  const clinicEmail = "appointments@futuremed.com";

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/services' element={<Services services={services} 
          doctors={doctors}
          setDoctors={setDoctors}
          setServices={setServices}
          />} />
          <Route path='/appointment' element={<Appointment doctors={doctors} clinicEmail={clinicEmail} services={services}/>} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>
      </div>
      )

  
}


function Navigation() {
  const location = useLocation();
  const getLinkClassName = (path) => {
    return location.pathname === path ? 'link active' : 'link';
  };

  return (
    <nav>
      <div className='nav-links'>
      <Link to="/" className={getLinkClassName('/')}>Home</Link>
      <Link to="/services" className={getLinkClassName('/services')}>Services</Link>
      <Link to="/appointment" className={getLinkClassName('/appointment')}>Make an Appointment</Link>
      <Link to="/team" className={getLinkClassName('/team')}>Team</Link>
      <Link to="/contact" className={getLinkClassName('/contact')}>Contact</Link>
      </div>
      <div>
      <Link to="/myaccount" className={getLinkClassName('/myaccount')}>My Account</Link>
      <Link to="/login" className={getLinkClassName('/login')}>Log In / Sign in</Link>
      </div>
      
     
    </nav>
  );
}


export default App;
