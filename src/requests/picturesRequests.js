import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";
import axios from 'axios';

export const fetchPersons = createAsyncThunk('pictures/fetchPictures', async ({ currentPage, setFethcing }) => {
   try {
      const { data } = await instance.get(`/character/?page=${currentPage}`);
      return data;
   } catch (err) {
      console.log(err);
   } finally {
      setFethcing(false)
   };
});


export const fetchEpisode = createAsyncThunk('pictures/fetchPictures', async (data) => {
   if (data.choosenPerson) {
      try {
         const response = await axios.get(data.choosenPerson.episode[0]);
         data.setEpisode({
            ...data.episode,
            name: response.data.name,
            number: response.data.episode
         });
      } catch (err) {
         console.log(err)
      };
   };
});
