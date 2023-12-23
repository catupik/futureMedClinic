import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Burger({ isMenuOpen, toggleMenu, burgerIcon }) {

  const [isBelowVideo, setIsBelowVideo] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/'

  const handleClickOutside = (e) => {
    if (isMenuOpen && !e.target.closest('.hamburger')){
      toggleMenu();
    }
  };

  useEffect(() => {
    
      // Этот useEffect активируется только на вкладке "Home"
      if (location.pathname === '/') {
        const handleScroll = () => {
          const videoElement = document.querySelector('.mobile-video');
          if (videoElement) {
            const videoHeight = videoElement.offsetHeight;
            setIsBelowVideo(window.scrollY > (videoHeight - 50));
          }
        };
  
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [location.pathname]); // Зависимость от location.pathname

  useEffect(()=> {
    document.addEventListener('mousedown', handleClickOutside);
    return ()=> {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <div className="hamburger">
      <img
className={`burger ${isHome ? (isBelowVideo ? 'black-burger' : '') : 'black-burger'}`}        onClick={toggleMenu}
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
