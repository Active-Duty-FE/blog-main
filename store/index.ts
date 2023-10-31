import { configureStore } from '@reduxjs/toolkit'
import testSlice from './module/test'
import deviceSlice from './module/device'
import maskSlice from './module/mask'

const store = configureStore({
  reducer: {
    [deviceSlice.name]: deviceSlice.reducer,
    [maskSlice.name]: maskSlice.reducer,
    [testSlice.name]: testSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
