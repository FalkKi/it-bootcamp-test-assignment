import { createSlice } from "@reduxjs/toolkit";
import { fetchPersons } from '../requests/picturesRequests';

const initialState = {
   persons: {
      items: [],
      status: false
   }
};

const picturesSlice = createSlice({
   name: 'persons',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPersons.pending, (state) => {
         state.persons.status = false;
      });
      builder.addCase(fetchPersons.fulfilled, (state, action) => {
         if (action.payload) {
            state.persons.items.push(...action.payload.results);
         };
         state.persons.status = true;
      });
      builder.addCase(fetchPersons.rejected, (state) => {
         state.persons.status = false;
         state.persons.items = [];
      });
   }
});

export const picturesReducer = picturesSlice.reducer;