import * as authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FormWrapper } from './LoginView.styled';
// ----------------------------------- MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };
    //Send info to login user
    dispatch(authOperations.logIn(user));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component={Paper}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          boxShadow: '-1px 5px 18px -4px #050505',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {/* <FormWrapper> */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          // noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                to="/signup"
                style={{ textDecoration: 'underline', color: '#1976d2' }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* </FormWrapper> */}
      </Box>
    </Container>
  );
};

export default LoginView;
