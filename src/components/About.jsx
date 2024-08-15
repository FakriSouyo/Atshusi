import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import chef from '../assets/chef.jpg';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-muted to-muted-foreground py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">Tentang Atshusi</h2>
          <p className="text-white mb-6 leading-relaxed">
            Atshusi adalah restoran sushi terkenal yang telah menyajikan masakan Jepang terbaik di kota ini selama
            lebih dari satu dekade. Komitmen kami terhadap kualitas, keaslian, dan layanan luar biasa telah
            menghasilkan pengikut setia di kalangan penggemar sushi.
          </p>
          <p className="text-white mb-6 leading-relaxed">
            Menu kami menampilkan berbagai pilihan kreasi sushi tradisional dan inovatif, serta berbagai
            hidangan khas Jepang lainnya. Setiap hidangan dipersiapkan dengan cermat oleh koki terampil kami
            menggunakan bahan-bahan terbaik dan teknik yang telah teruji waktu.
          </p>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="inline-block bg-primary text-white py-3 px-6 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer"
          >
            Lihat Menu Kami
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={chef}
            alt="Kepala Koki"
            className="rounded-lg object-cover w-full h-[400px] shadow-lg"
          />
          <p className="mt-6 text-center text-white bg-primary-dark py-3 px-4 rounded-lg">
            Kepala Koki kami, Takeshi Nakamura, memiliki pengalaman lebih dari 20 tahun dalam masakan tradisional Jepang.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;