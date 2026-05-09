import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filter/filterSlice.js'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})