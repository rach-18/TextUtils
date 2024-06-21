import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../App';

function Header() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <header className={`flex justify-between items-center px-5 py-4 ${state.isDarkMode ? 'bg-cyan-800 text-gray-100' : 'bg-gray-100 text-gray-500'}`}>
      <div className="flex gap-5 items-center">
        <p className="text-3xl font-semibold text-blue-500">TextUtils</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <p>{state.isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}</p>
        <button 
          className="border px-2 py-1 rounded"
          onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
        >
          {state.isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

export default Header;
