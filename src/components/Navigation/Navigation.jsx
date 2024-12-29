import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => {
  const getActiveClass = ({ isActive }) => clsx(css.link, { [css.active]: isActive });
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getActiveClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
