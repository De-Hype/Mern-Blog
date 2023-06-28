import { configureStore } from '@reduxjs/toolkit'
import AuthenticationSlice from './Authentication'

export const store = configureStore({
    reducer: {
      Auth: AuthenticationSlice.reducer,
    },
});