import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import ContactsPage from 'pages/Contacts';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Box } from '@mui/material';
// lazy!!!

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Box display="flex" flexDirection="column" alignItems="center" py={[3]}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={RegisterPage}
                    redirectedTo="/contacts"
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectedTo="/contacts"
                  />
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={ContactsPage}
                    redirectedTo="/login"
                  />
                }
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </Box>
    )
  );
}
