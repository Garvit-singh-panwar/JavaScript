import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})