// dataSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataFailure, fetchDataSuccess } =
  dataSlice.actions;
export default dataSlice.reducer;

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const mockData = [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Smith", age: 25 },
    ];
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(fetchDataSuccess(mockData));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
