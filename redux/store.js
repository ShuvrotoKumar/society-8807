import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { authSlice } from "./Slice/authSlice";
import { blogApi } from "./api/blogApi";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(baseApi.middleware, blogApi.middleware),
});
