import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-muted to-muted-foreground py-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-primary">Hubungi Kami</h2>
        <p className="text-white mb-8">Punya pertanyaan atau masukan? Jangan ragu untuk menghubungi kami.</p>
        <form className="grid gap-6">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Nama"
            required
            className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            placeholder="Pesan"
            required
            className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary h-40"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05, cursor: 'pointer' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;