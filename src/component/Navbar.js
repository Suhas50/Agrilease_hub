import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ contactRef }) {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the home page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        if (contactRef?.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-green-500 p-6 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold	 hover:text-gray-200">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-amber-700  hover:text-amber-600' : 'text-white')}>
            Agrilease Hub
          </NavLink>
        </div>

        <div className="flex space-x-6 font-bold text-lg">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-amber-700 capitalize hover:text-amber-600' : 'text-white capitalize hover:text-gray-200')}
          >
            about
          </NavLink>
          <NavLink
            to="/rentmachine"
            className={({ isActive }) => (isActive ? 'text-amber-700 capitalize hover:text-amber-600' : 'text-white capitalize hover:text-gray-200')}
          >
            rent machine
          </NavLink>
          <button onClick={handleScrollToContact} className="text-white capitalize hover:text-gray-200">
            contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
