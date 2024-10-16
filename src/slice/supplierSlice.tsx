import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  suppliersList: [],
  errorMessage: "",
};
export const fetchSupplier = createAsyncThunk(
  "counter/fetchValue",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/supplier/getSupplier"
    );
    const data = await response.json();
    return data;
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
  },
});

export const { reset } = supplierSlice.actions;

export default supplierSlice.reducer;
