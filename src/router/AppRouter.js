import { Route, Link, Router } from 'wouter';
import React, { useState, useEffect } from 'react';
import './AppRouter.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaEllipsisV } from 'react-icons/fa';
import MenuIcon from '../components/menuIcon/menuIcon';
import { FaCartArrowDown } from "react-icons/fa";

import Home from '../pages/home/home';
import About from '../pages/about/about';
import Car from '../pages/car/car';
import Contacts from '../pages/contact/contacts';
import Dama from '../pages/products/dama';
import Caballero from '../pages/products/caballero';

function AppRouter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showCategories, setShowCategories] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleHideCategories = () => {
    setShowCategories(false);
  };

  return (
    <div className="background">
      <Router>
      <nav className="navbar">
        <div className='flex flex-wrap w-full justify-between items-center px-5 relative'>
          <MenuIcon className='z-10' handleIconClick={handleMenu} />
          <div className={`menu-mobile-container ${menuOpen ? 'show-menu' : ''}`}>
            <div className="mobile-container flex flex-col pt-20 items-center pr-28 cursor-pointer">
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.2s' }} to="/">Home</Link>
              <div onClick={handleShowCategories} className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.4s' }}>Products</div>
              {showCategories && (
                <div className="flex flex-col items-start">
                  <Link className={`text-2xl text-white text-center py-3`} to="/products/dama">Dama</Link>
                  <Link className={`text-2xl text-white text-center py-3`} to="/products/caballero">Caballero</Link>
                </div>
              )}
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.6s' }} to="/about">About</Link>
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.8s' }} to="/contact">Contact us</Link>
            </div>
          </div>
          <Link to="/car" style={{ color: '#76ABAE', fontSize: '2.2rem' }}><FaCartArrowDown/></Link>
        </div>
      </nav>

        <main className="App-header">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contacts} />
          <Route path="/products/dama" component={Dama} />
          <Route path="/products/caballero" component={Caballero} />
          <Route path="/car" component={Car} />
        </main>

        <footer className='App-footer px-10 py-2 min-h-60'>
          <div className='footer-container'>
            <div className='flex flex-col justify-center items-center py-2'>
              <div className='flex flex-col pb-4 items-center'>
                  <a className="text-3xl text-white font-poppins font-extrabold">
                    JEWELRY RAW STORE
                  </a>
              </div>
              <a className='footer-text font-poppins font-extrabold'>FOLLOW US</a>
              <div className='flex space-x-4 mt-2'>
                <FaInstagram className='footer-icon w-6 h-6'/>
                <FaFacebook className='footer-icon w-6 h-6'/>
                <FaTwitter className='footer-icon w-6 h-6'/>
                <FaLinkedin className='footer-icon w-6 h-6'/>
                <FaGoogle className='footer-icon w-6 h-6'/>
              </div>
            </div>
            { !isMobile && (
              <div className='flex flex-row justify-center py-5'>
                <div className='flex flex-col justify-start px-5'>
                  <a className='text-2xl font-poppins footer-text px-2 pb-2'>Dama</a> 
                  <a className='text-2xl text-white font-oswald px-2'>relojs</a>
                  <a className='text-2xl text-white font-oswald px-2'>cadenas</a>
                  <a className='text-2xl text-white font-oswald px-2'>bracaletes</a> 
                  <a className='text-2xl text-white font-oswald px-2'>anillos</a>     
                  <a className='text-2xl text-white font-oswald px-2'>aretes</a>     
                </div>
                <div className='flex flex-col justify-start px-5'>
                  <a className='text-2xl font-poppins footer-text px-2 pb-2'>Caballero</a> 
                  <a className='text-2xl text-white font-oswald px-2'>relojs</a>
                  <a className='text-2xl text-white font-oswald px-2'>cadenas</a>
                  <a className='text-2xl text-white font-oswald px-2'>bracaletes</a>
                  <a className='text-2xl text-white font-oswald px-2'>anillos</a>             
                </div>
              </div>
              
            )}
            <div className='flex flex-col justify-start px-5 py-5'>
              <a className='text-2xl footer-text font-poppins px-2 pb-2'>About Us</a> 
              <a className='text-base text-white font-oswald px-2'>En RAW, creemos que las joyas son más que un accesorio: son una expresión de quién eres. Fundada en 2024, nuestra misión es ofrecer piezas exquisitas y hechas a mano que capturen la esencia de la elegancia y la belleza atemporal.</a>     
            </div>
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default AppRouter;
