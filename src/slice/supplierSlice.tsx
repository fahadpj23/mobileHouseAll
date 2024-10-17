import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

import ReducerInitialState from "constants/reducerInitialState";

import axios from "axios";
const initialState = {
  ...ReducerInitialState,
};
export const fetchSupplier = createAsyncThunk(
  "supplier/fetchValue",
  async () => {
    const response = axios.get(
      "http://localhost:8080/api/supplier/getSupplier"
    );
    return response;
  }
);

export const addSupplier = createAsyncThunk(
  "supplier/addSupplier",
  async (data: any) => {
    const supplierDetails = await axios.post(
      "http://localhost:8080/api/supplier/addSupplier",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return supplierDetails;
  }
);

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.entityList = action.payload.data.data;
    });
    builder.addCase(fetchSupplier.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addSupplier.fulfilled, (state) => {
      state.loading = false;
    });
    builder
      .addCase(addSupplier.rejected, (state) => {
        state.loading = false;
      })
      .addMatcher(isFulfilled(fetchSupplier, addSupplier), (state, action) => {
        state.loading = true;
      });
  },
});

export const { reset } = supplierSlice.actions;

export default supplierSlice.reducer;
