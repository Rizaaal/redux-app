import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    count: counterReducer
  }
});

console.log(store.getState());

export default store