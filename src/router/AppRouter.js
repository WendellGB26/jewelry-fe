import { Route, Link, Router } from 'wouter';
import React, { useState, useEffect } from 'react';
import './AppRouter.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaEllipsisV } from 'react-icons/fa';
import MenuIcon from '../components/menuIcon/menuIcon';

import Home from '../pages/home/home';
import About from '../pages/about/about';
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
        <div className='flex w-2/4 justify-between items-start px-5 relative'>
          <MenuIcon className='z-10' handleIconClick={handleMenu} />
          <div className={`menu-mobile-container ${menuOpen ? 'show-menu' : ''}`}>
            <div className="mobile-container flex flex-col pt-20 items-center pr-28 cursor-pointer">
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.2s' }} to="/">Home</Link>
              <div onClick={handleShowCategories} className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.4s' }}>Products</div>
              {showCategories && (
                <div className="flex flex-col content-center">
                  <Link className={`text-2xl text-white text-center py-3`} to="/products/dama">Dama</Link>
                  <Link className={`text-2xl text-white text-center py-3`} to="/products/caballero">Caballero</Link>
                </div>
              )}
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.6s' }} to="/about">About</Link>
              <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : ''}`} style={{ transitionDelay: '0.8s' }} to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </nav>

        <main className="App-header">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contacts} />
          <Route path="/products/dama" component={Dama} />
          <Route path="/products/caballero" component={Caballero} />
        </main>

        <footer className='App-footer px-10 py-5 min-h-60'>
          <div className='footer-container items-center'>
            <div className='flex flex-col justify-between items-center py-5'>
              <a className='footer-text font-sans font-extrabold'>FOLLOW US</a>
              <div className='flex space-x-4 mt-2'>
                <FaInstagram className='footer-icon w-6 h-6'/>
                <FaFacebook className='footer-icon w-6 h-6'/>
                <FaTwitter className='footer-icon w-6 h-6'/>
                <FaLinkedin className='footer-icon w-6 h-6'/>
                <FaGoogle className='footer-icon w-6 h-6'/>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center py-5'>
                <a className="text-2xl text-white font-sans font-extrabold">
                  JEWELRY RAW STORE
                </a>
            </div>
            { !isMobile && (
              <div className='flex flex-row justify-end py-5'>
                <div className='flex flex-col justify-start px-5'>
                  <a className='text-2xl footer-text px-2'>Products</a> 
                  <a className='text-2xl text-white px-2'>Dama</a>
                  <a className='text-2xl text-white px-2'>Caballero</a>         
                </div>
                <div className='flex flex-col justify-start px-5'>
                  <a className='text-2xl footer-text px-2'>Information</a> 
                  <a className='text-2xl text-white px-2'>wendell.sofdev@gmail.com</a>
                  <a className='text-2xl text-white px-2'>reichel.moya@gmail.com</a>
                  <a className='text-2xl text-white px-2'>+506 8888-8888</a>             
                </div>
              </div>
            )}
          </div>
        </footer>

      </Router>
    </div>
  );
}

export default AppRouter;
