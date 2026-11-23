import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.redux'

export const store = configureStore({
  reducer: {
    contador: counterReducer
  }
})


// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store