import { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Switch } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import LoaderElement from '../LoaderElement/LoaderElement';
import { MainWrapper } from './App.styled';
import bgImage from '../../images/bg-hd.jpg';
import bgImageDark from '../../images/bg-hd-dark.jpg';
// ----------------------------------- MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

// ----------------------------------- LazyLoad
const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import(
    '../../views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);
const SignUpView = lazy(() =>
  import(
    '../../views/SignUpView/SignUpView' /* webpackChunkName: "signUp-view" */
  ),
);
const LoginView = lazy(() =>
  import(
    '../../views/LoginView/LoginView' /* webpackChunkName: "logIn-view" */
  ),
);
// -----------------------------------

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  //check current user
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  //create MUI dark theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkTheme ? 'dark' : 'light',
          background: {
            default: '#3b3939',
            paper: darkTheme ? '#4c6362e0' : '#fff',
          },
          primary: {
            main: darkTheme ? '#c3cafc' : '#478d95',
          },
          secondary: {
            main: '#b0eef76f',
          },
        },
      }),
    [darkTheme],
  );
  //Theme toggle
  const handleThemeChange = () => {
    if (darkTheme) {
      setDarkTheme(false);
      document.body.style.backgroundImage = `url(${bgImage})`;
      return;
    }
    setDarkTheme(true);
    document.body.style.backgroundImage = `url(${bgImageDark})`;
  };

  return (
    <MainWrapper>
      {!isFetchingCurrentUser && (
        <ThemeProvider theme={theme}>
          <Toaster position="bottom-center" />
          <AppBar onClick={handleThemeChange} theme={theme} />

          <Switch>
            <Suspense
              fallback={
                <LoaderElement type="TailSpin" height={26} width={26} />
              }
            >
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/signup" restricted redirectTo={'/contacts'}>
                <SignUpView />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo={'/contacts'}>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </ThemeProvider>
      )}
    </MainWrapper>
  );
};

export default App;
