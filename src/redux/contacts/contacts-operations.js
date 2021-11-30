import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = createAsyncThunk(
  'contacts/get-contacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts', credentials);

      return data;
    } catch (error) {}
  },
);

export const createContact = createAsyncThunk(
  'contacts/create-contact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);

      return data;
    } catch (error) {}
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/delete-contact',
  async credentials => {
    try {
      const { data } = await axios.delete(
        `/contacts/${credentials}`,
        credentials,
      );

      return data;
    } catch (error) {}
  },
);

export const updateContact = createAsyncThunk(
  'contacts/update-contact',
  async credentials => {
    try {
      await axios.patch(`/contacts/${credentials.id}`, credentials);
    } catch (error) {}
  },
);
