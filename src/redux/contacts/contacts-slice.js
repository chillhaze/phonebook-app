import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from './contacts-operations.js';

const initialState = {
  contact: { name: null, number: null },
  allContacts: [],
  token: null,
  isLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.allContacts = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [contactsOperations.createContact.fulfilled](state, action) {
      state.contact = action.payload;
      state.token = action.payload.token;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contact = action.payload;
      state.token = action.payload.token;
    },
  },
});

//---------------------RTK usage
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://61708a5f23781c0017289a96.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     //фетч всех контактов из DB
//     getAllContacts: builder.query({
//       //по умолчанию метод GET (method: 'GET')
//       query: () => `/contacts`,
//       providesTags: ['Contacts'],
//     }),
//     // Создание нового контакта
//     createContact: builder.mutation({
//       query: newContact => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     // Удаление контакта
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     // Фильтр по имени
//     // getContactByName: builder.query({
//     //   query: id => `/contacts/${id}`,
//     // }),
//   }),
// });

// export const {
//   useGetAllContactsQuery,
//   useCreateContactMutation,
//   useDeleteContactMutation,
//   useGetContactByNameQuery,
// } = contactsApi;
