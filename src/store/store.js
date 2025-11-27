// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

import competencyReducer from "../features/Competencyslice.js";


export const store = configureStore({
  reducer: {//Your reducers will come  here
     competency: competencyReducer
  
  },
});