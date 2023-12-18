import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/new-meetup'>Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
