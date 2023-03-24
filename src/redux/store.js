import { configureStore } from "@reduxjs/toolkit";
import { picturesReducer } from './getPersonsReducer';

const store = configureStore({
   reducer: {
      persons: picturesReducer
   }
});

export default store;