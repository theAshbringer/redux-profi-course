import { postAPI } from './../services/PostService';
import userReducer from './reducers/UserSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefultMiddleware) => {
      return getDefultMiddleware().concat(postAPI.middleware)
    }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']