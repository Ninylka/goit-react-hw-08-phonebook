import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


  export const fetchContacts = createAsyncThunk(
    'contacts', 
    async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });



 
  export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts" , {name, number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', 
    async (contactId, thunkAPI) => {
    try {
       await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
