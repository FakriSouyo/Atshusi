import React from 'react';

const AuthModalManager = ({ activeModal, setActiveModal }) => {
  const openLogin = () => setActiveModal('login');
  const openSignup = () => setActiveModal('signup');

  return (
    <button
      onClick={openLogin}
      className="bg-white text-primary px-4 py-2 rounded-full hover:bg-primary-dark hover:text-black transition duration-300"
    >
      Masuk
    </button>
  );
};

export default AuthModalManager;