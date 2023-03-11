import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import type { Pokemon } from './types'

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://640734a477c1a905a0f16e16.mockapi.io/api/v1';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'Contacts',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({ url: API_ENDPOINT, method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contact => ({
        url: `${API_ENDPOINT}/${contact}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
