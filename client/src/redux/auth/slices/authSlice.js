import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:3001/api/auth/login';

export const loadUsers = createAsyncThunk(
  'user/loadUsers',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('access-token');
      if (token) {
        const response = await axios.get(`/api/user/users`, {
          headers: {
            'x-auth-token': localStorage.token,
          },
        });
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loadUser = createAsyncThunk(
  'user/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('access-token');
      if (token) {
        const response = await axios.get(`/api/auth/user`, {
          headers: {
            'x-auth-token': localStorage.token,
          },
        });
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios?.post(API_URL, data);
      localStorage.setItem('token', response.data.token);
      return jwtDecode(response.data.token);
    } catch (error) {
      localStorage.removeItem('token');
      return rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
    users: [],
  },
  reducers: {
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // Handle the pending state during the API call
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle the fulfilled state when the API call is successful
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });

    // Handle the fulfilled state when the API call is successful
    builder.addCase(loadUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    });
    // Handle the fulfilled state when the API call is successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload;
    });

    // Handle the rejected state when the API call fails
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// export const { clearToken } = authSlice.actions;
// export const selectToken = (state) => state.auth.token;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectLoading = (state) => state.auth.loading;
// export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
