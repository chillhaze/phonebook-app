import { Container, Title, Accent } from './HomwView.styled';
// ----------------------------------- MUI
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

const HomeView = () => {
  return (
    <CssBaseline>
      <Container>
        <Title>
          <Typography variant="h5" component="h1">
            Wellcome to <Accent>Phonebook</Accent> <b>App</b>
          </Typography>
        </Title>
      </Container>
    </CssBaseline>
  );
};

export default HomeView;
