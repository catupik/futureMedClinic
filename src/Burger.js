import { useEffect } from "react";
import { Link } from "react-router-dom";

function Burger({ isMenuOpen, toggleMenu, burgerIcon }) {

  const handleClickOutside = (e) => {
    if (isMenuOpen && !e.target.closest('.hamburger')){
      toggleMenu();
    }
  };

  useEffect(()=> {
    document.addEventListener('mousedown', handleClickOutside);
    return ()=> {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <div className="hamburger">
      <img
        className="burger"
        onClick={toggleMenu}
        src={burgerIcon}
        width="30"
        alt="burger-icon"
      />
      {isMenuOpen && (
        <div className="burger-link">
          <Link onClick={toggleMenu} className="link" to="/">Home</Link>
          <Link onClick={toggleMenu} className="link" to="/services">Services</Link>
          <Link onClick={toggleMenu} className="link" to="/appointment">Make an Appointment</Link>
          <Link onClick={toggleMenu} className="link" to="/team">Team</Link>
          <Link onClick={toggleMenu} className="link" to="/contact">Contact</Link>
          <Link onClick={toggleMenu} className="link" to="/myaccount">My Account</Link>
          <Link onClick={toggleMenu} className="link" to="/login">Log In / Sign in</Link>
        </div>
      )}
    </div>
  );
}

export default Burger;