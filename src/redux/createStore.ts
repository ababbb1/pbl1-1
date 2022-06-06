import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import dictReducer from './dictReducer'

const store = configureStore({
  reducer: dictReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store