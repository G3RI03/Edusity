import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/Icon.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const NavBar = () => {

  const [Sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
     <nav className={`navbar container ${Sticky ? 'dark-nav' : ''}`}> 
           <img src={logo} alt="logo" className="logo" />

           <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            </ul>

           <img src={menu} alt="menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar
