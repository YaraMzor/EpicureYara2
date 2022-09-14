import React from 'react'
import{configureStore} from '@reduxjs/toolkit';
import restaurantsReducer from './components/Restaurants/restaurantsSlicer';
import chefsReducer from './components/HomePage/chefOf/chefsSlicer';

export default configureStore({
    reducer:{
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
    },
})


