import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:1647';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/api/users/register', credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      toast.error(`wrong data, try again`, {
        duration: 4000,
        position: 'top-center',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      toast.error(`wrong data, try again`, {
        duration: 4000,
        position: 'top-center',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('no valid token');
    }

    try {
      setAuthHeader(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
