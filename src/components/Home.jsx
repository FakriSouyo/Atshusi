import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import herobg from '../assets/herobg.jpg';

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <img src={herobg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 text-white text-center p-10 rounded-xl shadow-2xl backdrop-blur-sm"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-primary"
        >
          Atshusi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-10 leading-relaxed"
        >
          Temukan sushi dan masakan Jepang terbaik disini.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="reservation"
            smooth={true}
            duration={500}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 cursor-pointer"
          >
            Buat Reservasi
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;