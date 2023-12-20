import { Link, useLocation } from 'react-router-dom';


function Navigation() {
    const location = useLocation();
    const getLinkClassName = (path) => {
      return location.pathname === path ? 'link active' : 'link';
    };
  
    return (
      <nav>
  
          <div className='nav-full'>
            <div className='nav-links'>
            <Link to="/" className={getLinkClassName('/')}>Home</Link>
            <Link to="/services" className={getLinkClassName('/services')}>Services</Link>
            <Link to="/appointment" className={getLinkClassName('/appointment')}>Make an Appointment</Link>
            <Link to="/team" className={getLinkClassName('/team')}>Team</Link>
            <Link to="/contact" className={getLinkClassName('/contact')}>Contact</Link>
            <Link to="/myaccount" className={getLinkClassName('/myaccount')}>My Account</Link>
            <Link to="/login" className={getLinkClassName('/login')}>Log In / Sign in</Link>
            </div>
           </div>
       
       
        
       
      </nav>
    );
  }

  export default Navigation