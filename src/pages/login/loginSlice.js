import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchToken = createAsyncThunk('login/fetchToken', async (data) => {
   return fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   }).then((result) => result.json());
});

export const loginSlice = createSlice({
   name: 'login',
   initialState: '',
   extraReducers: (builder) => {
      builder.addCase(fetchToken.pending, (state, action) => {
         return { ...state, loading: true };
      });
      builder.addCase(fetchToken.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            token: action.payload.body.token,
            error: null,
         };
      });
      builder.addCase(fetchToken.rejected, (state, action) => {
         return {
            ...state,
            loading: false,
            token: null,
            error: action.error.message,
         };
      });
   },
});
