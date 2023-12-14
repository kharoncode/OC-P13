import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProfile = createAsyncThunk(
   'profile/fetchProfile',
   async (token, { rejectWithValue }) => {
      return fetch(`${import.meta.env.VITE_HOST}/api/v1/user/profile`, {
         method: 'POST',
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

export const updateProfile = createAsyncThunk(
   'profile/updateProfile',
   async ({ name, token }, { rejectWithValue }) => {
      return fetch(`${import.meta.env.VITE_HOST}/api/v1/user/profile`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(name),
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

const initialState = {
   loading: false,
   profile: null,
   error: null,
   isAuthenticated: false,
   account: [
      {
         title: 'Argent Bank Checking (x8349)',
         amount: 2082.79,
         description: 'Available Balance',
      },
      {
         title: 'Argent Bank Savings (x6712)',
         amount: 10928.42,
         description: 'Available Balance',
      },
      {
         title: 'Argent Bank Credit Card (x8349)',
         amount: 184.3,
         description: 'Available Balance',
      },
   ],
};

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
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
      resetProfile: () => {
         return initialState;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchProfile.pending, (state, action) => {
         state.loading = true;
         state.profile = null;
         state.error = null;
         state.isAuthenticated = false;
      });
      builder.addCase(fetchProfile.fulfilled, (state, action) => {
         state.loading = false;
         state.profile = action.payload;
         state.error = null;
         state.isAuthenticated = true;
      });
      builder.addCase(fetchProfile.rejected, (state, action) => {
         state.loading = false;
         state.profile = null;
         state.error = action.error.message;
         state.isAuthenticated = false;
      });
      builder.addCase(updateProfile.pending, (state, action) => {
         state.loading = true;
         state.profile = null;
         state.error = null;
      });
      builder.addCase(updateProfile.fulfilled, (state, action) => {
         state.loading = false;
         state.profile = action.payload;
         state.error = null;
      });
      builder.addCase(updateProfile.rejected, (state, action) => {
         state.loading = false;
         state.profile = null;
         state.error = action.error.message;
      });
   },
});
