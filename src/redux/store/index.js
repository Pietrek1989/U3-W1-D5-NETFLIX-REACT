import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";

const store = configureStore({
  reducer: combineReducers({
    search: searchReducer,
  }),
});

export default store;
