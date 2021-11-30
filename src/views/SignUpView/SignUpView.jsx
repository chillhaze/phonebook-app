import * as authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FormWrapper } from './SignUpView.styled';
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

const SignUpView = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   name: data.get('name'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    const newUser = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    //Send info to register new user
    dispatch(authOperations.signup(newUser));
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
          Sign up
        </Typography>
        {/* <FormWrapper> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              // sm={6}
            >
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                to="/login"
                style={{ textDecoration: 'underline', color: '#1976d2' }}
              >
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* </FormWrapper> */}
      </Box>
    </Container>
  );
};

export default SignUpView;
