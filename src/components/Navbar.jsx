import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AuthModalManager from './AuthModalManager';

const Navbar = ({ activeModal, setActiveModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = () => (
    <>
      {location.pathname === '/' ? (
        <>
          <ScrollLink to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Beranda
          </ScrollLink>
          <ScrollLink to="menu" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Menu
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Tentang
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Kontak
          </ScrollLink>
        </>
      ) : (
        <>
          <Link to="/" className="hover:underline cursor-pointer">
            Beranda
          </Link>
          <Link to="/" className="hover:underline cursor-pointer">
            Menu
          </Link>
          <Link to="/" className="hover:underline cursor-pointer">
            Tentang
          </Link>
          <Link to="/" className="hover:underline cursor-pointer">
            Kontak
          </Link>
        </>
      )}
      <Link to="/reservation" className="hover:underline cursor-pointer">
        Reservasi
      </Link>
    </>
  );
  return (
    <nav className={`${isScrolled ? 'bg-primary/30 backdrop-blur-md backdrop-filter backdrop-saturate-150 border-b border-primary/20' : 'bg-primary'} text-primary-foreground py-4 px-6 md:px-10 flex items-center justify-between fixed w-full z-50 transition-all duration-300`}>
      <Link to="home" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer">
        Atshusi
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <NavLinks />
        <AuthModalManager activeModal={activeModal} setActiveModal={setActiveModal} />
      </div>
      <div className="md:hidden flex items-center gap-4">
        <AuthModalManager activeModal={activeModal} setActiveModal={setActiveModal} />
        <button onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled ? 'bg-primary/30 backdrop-blur-md backdrop-filter backdrop-saturate-150 border-b border-primary/20' : 'bg-primary'} py-4 px-6`}>
          <div className="flex flex-col gap-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;