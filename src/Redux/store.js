import { configureStore } from '@reduxjs/toolkit'
import { themeSwitchReducer } from './reducer';

const store = configureStore({
  reducer: {
    theme : themeSwitchReducer
  }
})

export default store;