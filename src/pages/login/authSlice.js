import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: { user: null, token: null },
   reducers: {
      setCredentials: (currentState, action) => {
         const { user, accessToken } = action.payload;
         return { ...currentState, user: user, token: accessToken };
      },
      logOut: (currentState, action) => {
         return { ...currentState, user: null, token: null };
      },
   },
});
