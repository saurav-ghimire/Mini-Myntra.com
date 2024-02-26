import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone : false, // PENDING = fales AND DONE = True
    currentlyFetching : false
  },
  reducers: {
    markFetchDone  : (state) => {
      return state.fetchDone = true;
    },
    markFetching  : (state) => {
      return state.currentlyFetching =  true;
    },
    markFetchingDone  : (state) => {
      return state.currentlyFetching =  false;
    }
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;