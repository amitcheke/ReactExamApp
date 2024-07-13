// store.ts

import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../questionSlice'; // Adjust the path as needed
// import { RootState } from '../types'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    questions: questionReducer,
    // other reducers if any
  },
});

export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
