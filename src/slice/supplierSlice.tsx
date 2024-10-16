import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  loading: false,
  suppliersList: [],
  errorMessage: "",
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
  async () => {
    console.log("Fd");
    const info = {
      name: "cxc",
      address: "dsd",
      phone: 4545454,
    };
    const supplierDetails = await axios.post(
      "http://localhost:8080/api/supplier/addSupplier",
      info
    );
    console.log(supplierDetails);
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
    builder.addCase(fetchSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSupplier.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchSupplier.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSupplier.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addSupplier.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { reset } = supplierSlice.actions;

export default supplierSlice.reducer;
