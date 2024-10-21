import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import supplierReducer from "slice/supplierSlice";
import crudReducer from "slice/crudSlice";

const store = configureStore({
  reducer: {
    supplier: supplierReducer,
    crud: crudReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
