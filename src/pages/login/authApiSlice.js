import { apiSlice } from '../../services/profileApi';

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation({
         query: (credentials) => ({
            url: '/auth',
            method: 'POST',
            body: { ...credentials },
         }),
      }),
   }),
});
