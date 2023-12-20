

import './App.css';
import Appointment from './Appointment';
import Home from './Home';
import Contact from './Contact';
import { data } from './data';
import MyAccount from './MyAccount';
import Services from './Services';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Team';
import { useState } from "react";
import { dataService } from "./dataService";
import LogIn from './LogIn';

import Burger from './Burger';
import burger from './burger.svg'
import burger2 from './burger2.svg'

function App() {
  const [services, setServices] = useState(dataService);
  const [doctors, setDoctors] = useState(data);
  const clinicEmail = "appointments@futuremed.com";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState(burger)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setBurgerIcon(isMenuOpen ? burger : burger2)
  };

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} burgerIcon={burgerIcon}/>
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





export default App;
