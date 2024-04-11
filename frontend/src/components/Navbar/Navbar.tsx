import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/play">Play</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default Navbar;
