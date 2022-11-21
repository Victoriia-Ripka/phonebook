// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import ContactsPage from 'pages/Contacts';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
// lazy!!!

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Route>
    </Routes>
  );
}
