import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from './Navigation.styled';
import * as authSelectors from '../../redux/auth/auth-selectors';
// ----------------------------------- Icons
import { FaLock } from 'react-icons/fa';
// ----------------------------------- MUI
import Button from '@mui/material/Button';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <LinkContainer>
      <NavLink exact to="/">
        <Button size="small" variant="outlined" sx={{ mr: 1, mt: 1 }}>
          Home
        </Button>
      </NavLink>

      {isLoggedIn ? (
        <NavLink exact to="/contacts">
          <Button size="small" variant="outlined" sx={{ mt: 1 }}>
            Contacts
          </Button>
        </NavLink>
      ) : (
        <NavLink exact to="/contacts">
          <Button size="small" sx={{ mt: 1 }}>
            Contacts
            <FaLock style={{ marginLeft: 5 }} />
          </Button>
        </NavLink>
      )}
    </LinkContainer>
  );
};
