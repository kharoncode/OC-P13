import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: '',
   reducers: {
      updateFirstName: (currentState, action) => {
         const user = {
            ...currentState,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
         };
         return user;
      },
      addProfile: (currentState, action) => {
         const user = { ...currentState, ...action.payload };
         return user;
      },
   },
});
