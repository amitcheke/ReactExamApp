// questionSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./types"; // Adjust the path as needed
import { nanoid } from 'nanoid';

const initialState = {
  list: [{
    id: '1',
    question: 'What is Redux?'
  }]
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<string>) => {
      const newQuestion = {
        id: nanoid(),
        question: action.payload
      };
      state.list.push(newQuestion);
    }
  }
});

export const { addQuestion } = questionSlice.actions;

export default questionSlice.reducer;
