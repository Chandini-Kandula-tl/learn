"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserText {
  value: string;
}

const initialState: UserText = {
  value: "",
};

// export const userTextSlice = createSlice({
//   name: "userText",
//   initialState,
//   reducers: {
//     setUserText: (state, action: PayloadAction<string>) => {
//       if (action.type === "userText/setUserText") {
//         return {
//           ...state,
//           value: action.payload,
//         };
//       }
//     },
//   },
// });

export const userTextSlice = createSlice({
  name: "userText",
  initialState,
  reducers: {
    setUserText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setUserText } = userTextSlice.actions;
const userTextReducer = userTextSlice.reducer;
export default userTextReducer;
