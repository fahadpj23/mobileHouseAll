import { configureStore } from "@reduxjs/toolkit";
import supplierReducer from "slice/supplierSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    supplier: supplierReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
