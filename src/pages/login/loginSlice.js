import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchToken = createAsyncThunk(
   'login/fetchToken',
   async (data, { rejectWithValue }) => {
      return fetch(`${import.meta.env.VITE_HOST}/api/v1/user/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
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
   token: false,
   error: null,
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      resetLogin: () => {
         return initialState;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchToken.pending, (state, action) => {
         state.loading = true;
         state.token = false;
         state.error = null;
      });
      builder.addCase(fetchToken.fulfilled, (state, action) => {
         state.loading = false;
         state.token = action.payload.body?.token;
         state.error = null;
      });
      builder.addCase(fetchToken.rejected, (state, action) => {
         state.loading = false;
         state.token = false;
         state.error = action.error.message;
      });
   },
});
