import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProfile = createAsyncThunk(
   'profile/fetchProfile',
   async (token, { rejectWithValue }) => {
      return fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'POST', // or 'PUT'
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      })
         .then((result) => result.json())
         .then((data) => {
            if (data.status !== 200) {
               return rejectWithValue(data.message);
            } else {
               return data;
            }
         });
   }
);

export const profileSlice = createSlice({
   name: 'profile',
   initialState: {
      loading: false,
      profile: null,
      error: null,
   },
   reducers: {
      updateFirstName: (currentState, action) => {
         const profile = {
            ...currentState.profile.body,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
         };
         return {
            ...currentState,
            profile: { ...currentState.profile, body: { ...profile } },
         };
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchProfile.pending, (state, action) => {
         state.loading = true;
         state.profile = null;
         state.error = null;
      });
      builder.addCase(fetchProfile.fulfilled, (state, action) => {
         console.log(action.payload);
         state.loading = false;
         state.profile = action.payload;
         state.error = null;
      });
      builder.addCase(fetchProfile.rejected, (state, action) => {
         state.loading = false;
         state.profile = null;
         state.error = action.error.message;
      });
   },
});
