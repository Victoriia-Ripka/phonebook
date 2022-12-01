import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Box } from '@mui/material';
const Layout = React.lazy(() => import('components/Layout'));
const ContactsPage = React.lazy(() => import('pages/Contacts'));
const HomePage = React.lazy(() => import('pages/Home'));
const LoginPage = React.lazy(() => import('pages/Login'));
const RegisterPage = React.lazy(() => import('pages/Register'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Box display="flex" flexDirection="column" alignItems="center">
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
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Box>
    )
  );
}
