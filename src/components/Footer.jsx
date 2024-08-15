import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-10 flex items-center justify-between">
      <div className="text-sm">&copy; 2024 Atshusi. All rights reserved.</div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">About</Link>
        <Link to="menu" smooth={true} duration={500} className="hover:underline cursor-pointer">Menu</Link>
        <Link to="reservation" smooth={true} duration={500} className="hover:underline cursor-pointer">Reservation</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">Contact</Link>
      </nav>
    </footer>
  );
};

export default Footer;