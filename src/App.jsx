import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Home />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="in"
          viewport={{ once: true }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <Menu />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="in"
          viewport={{ once: true }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <About />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="in"
          viewport={{ once: true }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <Reservation />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="in"
          viewport={{ once: true }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <Login />
      <Signup />
    </div>
  );
}

export default App;