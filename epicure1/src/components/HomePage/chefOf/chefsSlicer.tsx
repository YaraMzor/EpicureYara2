import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Url } from 'url';



export const chefsSlice = createSlice({
  name: 'chefs',
  initialState: {
    value: [] as any
  },
  reducers: {
    setchefs: (state, action) => {
      
        state.value=action.payload

    },
    addchefs: (state,action) => {
      state.value.push(action.payload);
    },
    deletechefs:(state, action) => {
      state.value = [];
    },
  },
})
// Action creators are generated for each case reducer function
export const { setchefs, addchefs, deletechefs } = chefsSlice.actions;
export default chefsSlice.reducer