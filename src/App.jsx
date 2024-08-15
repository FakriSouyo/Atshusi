import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import ReservationPage from './pages/ReservationPage';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  const openLogin = () => setActiveModal('login');
  const openSignup = () => setActiveModal('signup');
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    // Periksa status login pengguna di sini
    // Misalnya, dengan memeriksa token di localStorage atau session
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      openLogin();
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar activeModal={activeModal} setActiveModal={setActiveModal} isLoggedIn={isLoggedIn} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.main
                className="flex-grow pt-16"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
                <Menu />
                <About />
                <Contact />
              </motion.main>
            } />
            <Route path="/reservation" element={
              <ProtectedRoute>
                <motion.main
                  className="flex-grow pt-16"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ReservationPage setActiveModal={setActiveModal} />
                </motion.main>
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Login isOpen={activeModal === 'login'} onClose={closeModal} openSignup={openSignup} setIsLoggedIn={setIsLoggedIn} />
        <Signup isOpen={activeModal === 'signup'} onClose={closeModal} openLogin={openLogin} />
      </div>
    </Router>
  );
}

export default App;