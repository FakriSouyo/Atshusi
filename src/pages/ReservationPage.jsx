import React from 'react';
import Reservation from '../components/Reservation';

const ReservationPage = ({ setActiveModal }) => {
  return (
    <div className="py-20 px-6 md:px-10 bg-gradient-to-r from-muted to-muted-foreground">
      <Reservation setActiveModal={setActiveModal} />
    </div>
  );
};

export default ReservationPage;