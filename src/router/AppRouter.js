import {  Route, Link, Router, Switch } from 'wouter';
import React, { memo, useState, useEffect } from 'react';
import './AppRouter.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaUserAlt } from 'react-icons/fa';
import MenuIcon from '../components/shared/menuIcon/menuIcon';
import { FaCartArrowDown } from "react-icons/fa";
import LoginModal from '../components/feature/auth/login/login';
import { useSelector } from 'react-redux';

import Home from '../components/layout/home/home';
import About from '../components/layout/about/about';
import Car from '../components/layout/car/car';
import Contacts from '../components/layout/contact/contacts';
import Caballero from '../components/layout/products/caballero';

const MemoizedHome = memo(Home);
const MemoizedAbout = memo(About);
const MemoizedCar = memo(Car);
const MemoizedContacts = memo(Contacts);
const MemoizedCaballero = memo(Caballero);

function AppRouter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showCategories, setShowCategories] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isadmin, setisAdmin] = useState(false);
  const userState = useSelector((state) => state.user);
 
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    setisAdmin(userState?.isadmin)
  },[userState])
  
  return (
    <div className="background">
      <Router>
        { showLogin && !userState && <LoginModal show handleClose={handleCloseLogin}/> }
        <nav className="navbar">
          <div className='flex flex-wrap w-full justify-between items-center px-5 relative'>
            <MenuIcon className='z-10' handleIconClick={handleMenu} />
            <div className={`menu-mobile-container ${menuOpen ? 'show-menu' : ''}`}>
              <div className="mobile-container flex flex-col pt-20 items-center pr-28 cursor-pointer">
                <div className={`flex flex-col slide-in ${menuOpen && ('slide-in-visible')}`}>
                  <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'}`} style={{ transitionDelay: '0.2s' }} to="/">Home</Link>
                  <a onClick={handleShowCategories} className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'} `} style={{ transitionDelay: '0.6s' }}>Products</a>
                  {showCategories && (
                    <div className={`flex flex-col items-end ${showCategories ? 'menu-item-show' : 'menu-item'}`}>
                      <Link className={`text-2xl text-center text-textActive py-3`} style={{ transitionDelay: '0.2s' }} to="/products/dama/clocks">Dama</Link>
                      <Link className={`text-2xl text-center text-textActive py-3`} style={{ transitionDelay: '0.6s' }} to="/products/caballero/clocks">Caballero</Link>
                    </div>
                  )}
                  <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'}`} style={{ transitionDelay: '1s' }} to="/about">About</Link>
                  <Link className={`text-2xl text-white text-center py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'}`} style={{ transitionDelay: '1.4s' }} to="/contact">Contact us</Link>
                  { isadmin && (
                    <div className='flex flex-col items-start'>
                      <Link className={`text-2xl text-white text-start py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'}`} style={{ transitionDelay: '1.7s' }} to="/products/admin/add">Crear Producto</Link>
                      <Link className={`text-2xl text-white text-start py-3 ${menuOpen ? 'menu-item-show' : 'menu-item'}`} style={{ transitionDelay: '2s' }} to="/products/admin/list">Inventario</Link>                    
                    </div>
                  )}                  
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              { !userState && (
                <a onClick={handleLoginClick} className="text-2xl mr-6 cursor-pointer" style={{ color: 'rgb(137, 30, 47)' }}><FaUserAlt/></a> 
              )}
              <Link to="/car" style={{ color: 'rgb(137, 30, 47)', fontSize: '2.2rem' }}><FaCartArrowDown/></Link>
            </div>
          </div>
        </nav>

        <main className="App-header">
          <Switch>
            <Route path="/" component={MemoizedHome} />
            <Route path="/about" component={MemoizedAbout} />
            <Route path="/contact" component={MemoizedContacts} />
            <Route path="/products/:genero/:tab" component={MemoizedCaballero} />
            <Route path="/car" component={MemoizedCar} />            
          </Switch>
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
                  <a href='/products/dama/clocks' className='text-2xl text-white font-oswald px-2'>relojs</a>
                  <a href='/products/dama/necklaces' className='text-2xl text-white font-oswald px-2'>cadenas</a>
                  <a href='/products/dama/bracelets' className='text-2xl text-white font-oswald px-2'>bracaletes</a> 
                  <a href='/products/dama/rings' className='text-2xl text-white font-oswald px-2'>anillos</a>     
                  <a href='/products/dama/earrings' className='text-2xl text-white font-oswald px-2'>aretes</a>     
                </div>
                <div className='flex flex-col justify-start px-5'>
                  <a className='text-2xl font-poppins footer-text px-2 pb-2'>Caballero</a> 
                  <a href='/products/caballero/clocks' className='text-2xl text-white font-oswald px-2'>relojs</a>
                  <a href='/products/caballero/necklaces' className='text-2xl text-white font-oswald px-2'>cadenas</a>
                  <a href='/products/caballero/bracelets' className='text-2xl text-white font-oswald px-2'>bracaletes</a> 
                  <a href='/products/caballero/rings' className='text-2xl text-white font-oswald px-2'>anillos</a>     
                  <a href='/products/caballero/earrings' className='text-2xl text-white font-oswald px-2'>aretes</a>             
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
