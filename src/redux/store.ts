import { configureStore, isAnyOf } from "@reduxjs/toolkit"
import { apiSlice } from "./services/spacex"
import {
  profileSlice,
  toggleMissionReservation,
  toggleRocketReservation,
} from "./services/profile"
import { listenerMiddleware, startAppListening } from "./listenerMiddleware"

startAppListening({
  matcher: isAnyOf(toggleMissionReservation, toggleRocketReservation),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      "profile",
      JSON.stringify((listenerApi.getState() as RootState).profileReducer)
    )
  },
})

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    profileReducer: profileSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      listenerMiddleware.middleware
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
