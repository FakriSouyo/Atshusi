import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Signup = ({ isOpen, onClose, openLogin }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Daftar</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-black bg-gray-200 shadow-sm focus:border-black focus:ring focus:ring-gray focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-black bg-gray-200 shadow-sm focus:border-black focus:ring focus:ring-gray focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Nomor HP
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border-black bg-gray-200 shadow-sm focus:border-black focus:ring focus:ring-gray focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full rounded-md border-black bg-gray-200 shadow-sm focus:border-black focus:ring focus:ring-gray focus:ring-opacity-50"
                  />
                </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition duration-300"
                >
                  Daftar
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{' '}
                <button 
                  onClick={() => { onClose(); openLogin(); }}
                  className="text-primary hover:underline"
                >
                  Masuk
                </button>
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-4 text-sm text-gray-600 hover:text-primary"
            >
              Tutup
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Signup;