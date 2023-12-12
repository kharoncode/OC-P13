import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
   reducerPath: 'loginApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/api/v1/user/profile',
      credentials: 'include',
      prepareHeaders: (headers) => {
         const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzZmYTRmMzliODc5OGY3NDFmYTMyMyIsImlhdCI6MTcwMjM4OTc5MSwiZXhwIjoxNzAyNDc2MTkxfQ.A_cv1JkDQ8KMxhPIuUMwv03CgbL6WISbDQBN0P4cbbw';
         if (token) {
            headers.set('authorization', `Bearer ${token}`);
         }
         return headers;
      },
   }),
   endpoints: (builder) => ({
      login: builder.query({
         query: (credentials) => ({
            url: '/profil',
            method: 'POST',
            body: { ...credentials },
         }),
      }),
   }),
});

export const { useGetLoginApi } = api;
