import * as authSelectors from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { Container, Title, Accent } from './UserMenu.styled';
// ----------------------------------- MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <CssBaseline>
      <Container>
        <Title>
          Online: <Accent>{name}</Accent>
        </Title>
        <Button
          sx={{ ml: 1, mt: 1 }}
          size="small"
          variant="contained"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Button>
      </Container>
    </CssBaseline>
  );
};
