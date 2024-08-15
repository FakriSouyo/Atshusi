import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import menuItems from './menuItems';

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 md:px-10 bg-gradient-to-r from-muted to-muted-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-primary">Menu Kami</h2>
        <p className="text-white mb-12 text-lg">Jelajahi pilihan sushi dan hidangan Jepang kami yang lezat.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, cursor: 'pointer' }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{item.name}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link
                  to="reservation"
                  smooth={true}
                  duration={500}
                  className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                  Pesan Sekarang
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;