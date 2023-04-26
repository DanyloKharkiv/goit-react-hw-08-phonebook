import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/goit-react-hw-08-phonebook/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/goit-react-hw-08-phonebook/phonebook"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};