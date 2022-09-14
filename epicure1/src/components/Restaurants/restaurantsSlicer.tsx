import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Url } from 'url';
// import { fetchRestaurants } from '../services/restaurantsService';

// export const setRestaurantsThink = createAsyncThunk<MyData, Url, {rejectValue: MyKnownError}>(
//   'restaurants/setRestaurants',
//   async (url:Url, thunkApi) => {
//     const response = await fetchRestaurants(url);
//     if(response.status === 400){
//       return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
//     }
//     return response as MyData;
//   }
// );


export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    value: [] as any
  },
  reducers: {
    setRestaurants: (state, action) => {
      
        state.value=action.payload

    },
    addRestaurant: (state,action) => {
      state.value.push(action.payload);
    },
    deleteResturants:(state, action) => {
      state.value = [];
    },
  },
})
// Action creators are generated for each case reducer function
export const { setRestaurants, addRestaurant, deleteResturants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer