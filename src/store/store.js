import { configureStore } from '@reduxjs/toolkit'
import precioSlice from '../slice/precioSlice'

export const store = configureStore({
  reducer: {
    precio: precioSlice
  },
})