import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone : 'PENDING', // PENDING AND DONE
    currentlyFetching : false
  },
  reducers: {
    markFetchDone  : (store, action) => {
      return store;
    },
    markFetching  : (store, action) => {
      return store;
    },
    markFetchingDone  : (store, action) => {
      return store;
    }
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;