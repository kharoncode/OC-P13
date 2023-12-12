import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProfile = createAsyncThunk(
   'profile/fetchProfile',
   async (token) => {
      return fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'POST', // or 'PUT'
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      }).then((result) => result.json());
   }
);

export const profileSlice = createSlice({
   name: 'profile',
   initialState: '',
   extraReducers: (builder) => {
      builder.addCase(fetchProfile.pending, (state, action) => {
         return { ...state, loading: true };
      });
      builder.addCase(fetchProfile.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            profile: action.payload,
            error: null,
         };
      });
      builder.addCase(fetchProfile.rejected, (state, action) => {
         return {
            ...state,
            loading: false,
            token: null,
            error: action.error.message,
         };
      });
   },
});
