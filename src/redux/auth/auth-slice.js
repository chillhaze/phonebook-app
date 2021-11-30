import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //------------------ Signup
    [authOperations.signup.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.signup.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.signup.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    //------------------ Login
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    //------------------ logout
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.pending](state, action) {
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.logOut.rejected](state, action) {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload.message;
    },
    //------------------ Fetch Current User
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
      state.isLoggedIn = false;
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

//-------------------------------RTK usage
// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['users'],
//   endpoints: builder => ({
//     // Создание нового пользователя
//     createUser: builder.mutation({
//       query: newUser => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: newUser,
//       }),
//       invalidatesTags: ['users'],
//     }),
//     logInUser: builder.mutation({
//       query: user => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: user,
//       }),
//       invalidatesTags: ['users'],
//     }),
//     logOutUser: builder.mutation({
//       query: user => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: user,
//         header: {
//           Authorization: token,
//         },
//       }),
//       invalidatesTags: ['users'],
//     }),
//     // Удаление контакта
//     // deleteContact: builder.mutation({
//     //   query: id => ({
//     //     url: `/contacts/${id}`,
//     //     method: 'DELETE',
//     //   }),
//     //   invalidatesTags: ['Contacts'],
//     // }),
//     // Фильтр по имени
//     // getContactByName: builder.query({
//     //   query: id => `/contacts/${id}`,
//     // }),
//   }),
// });

// export const { useCreateUserMutation, useCreateUserMutation } = authApi;
