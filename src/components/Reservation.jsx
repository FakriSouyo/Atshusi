import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const timeOptions = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
  ];

  return (
    <section id="reservation" className="py-20 px-6 md:px-10 bg-gradient-to-r from-muted to-muted-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-primary">Buat Reservasi</h2>
        <p className="text-white mb-8 text-lg">
          Pesan meja Anda di Atshusi dan nikmati pengalaman bersantap yang tak terlupakan.
        </p>
        <form className="grid gap-6 bg-white/10 p-8 rounded-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Nama"
              required
              className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="number"
              placeholder="Jumlah Tamu"
              required
              className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Pilih Tanggal"
                className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                popperPlacement="bottom-start"
                popperModifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10],
                    },
                  },
                  {
                    name: 'preventOverflow',
                    options: {
                      rootBoundary: 'viewport',
                      tether: false,
                      altAxis: true,
                    },
                  },
                ]}
                popperClassName="datepicker-popper"
              />
            </div>
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-3 border-2 border-primary rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option value="" disabled>Pilih Waktu</option>
                {timeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            Reservasi Sekarang
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Reservation;