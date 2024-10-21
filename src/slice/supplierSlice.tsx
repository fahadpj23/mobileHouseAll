import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";

import ReducerInitialState from "constants/reducerInitialState";

import axios from "axios";
const initialState = {
  ...ReducerInitialState,
  error: {} as any,
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
  "user/addUser",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/supplier/addSupplier",
        data
      );
      return response.data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error);
      }
    }
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
      state.errorMessage = "something went wrong";
    });
    builder.addCase(addSupplier.fulfilled, (state) => {
      state.loading = false;
      state.successMessage = "Supplier Added successfully";
    });
    builder
      .addCase(addSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload ?? {};
      })
      .addMatcher(isPending(fetchSupplier, addSupplier), (state, action) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      });
  },
});

export const { reset } = supplierSlice.actions;

export default supplierSlice.reducer;
