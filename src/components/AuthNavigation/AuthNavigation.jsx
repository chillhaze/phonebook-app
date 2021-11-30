import { NavLink } from 'react-router-dom';
import { LinkContainer } from './AuthNavigation.styled';
// ----------------------------------- MUI
import Button from '@mui/material/Button';

export const AuthNavigation = () => {
  return (
    <LinkContainer>
      <NavLink to="/login">
        <Button
          size="small"
          variant="outlined"
          sx={{ ml: 1, mt: 1, minWidth: 72 }}
        >
          Log in
        </Button>
      </NavLink>

      <NavLink to="/signup">
        <Button size="small" variant="outlined" sx={{ ml: 1, mt: 1 }}>
          Sign Up
        </Button>
      </NavLink>
    </LinkContainer>
  );
};
