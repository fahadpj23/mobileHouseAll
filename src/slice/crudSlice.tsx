import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
} from "@reduxjs/toolkit";

import ReducerInitialState from "constants/reducerInitialState";

import axios from "axios";
import { axiosApi } from "axiosInstance";

const initialState = {
  ...ReducerInitialState,
  error: {} as any,
};
export const getEntities = createAsyncThunk(
  "supplier/fetchValue",
  async (pageName: string) => {
    const response = axiosApi.get(`${pageName}/getEntities`);
    return response;
  }
);

export const addEntity = createAsyncThunk<
  any,
  { pageName: string; data: any },
  { rejectValue: string }
>("data/fetchData", async ({ pageName, data }, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post(`${pageName}/addEntity`, data);
    return response.data;
  } catch (error) {
    if (error) {
      return rejectWithValue("failed");
    }
  }
});

export const deleteEntity = createAsyncThunk<
  any,
  { pageName: string; deleteId: number },
  { rejectValue: string }
>("data/deleteEntity", async ({ pageName, deleteId }, { rejectWithValue }) => {
  try {
    const response = await axiosApi.delete(`${pageName}/${deleteId}`);
    return response;
  } catch (error) {
    if (error) {
      return rejectWithValue("failed");
    }
  }
});

export const crudSlice = createSlice({
  name: "crud",
  initialState: initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEntities.fulfilled, (state, action) => {
      state.loading = false;
      state.entityList = action.payload.data.data;
    });
    builder.addCase(addEntity.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = "added successFully";
    });
    builder.addCase(deleteEntity.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = "supplier deleted successFully";
    });
    builder
      .addCase(getEntities.rejected, (state) => {
        state.loading = false;
        state.errorMessage = "something went wrong";
      })

      .addMatcher(
        isPending(getEntities, addEntity, deleteEntity),
        (state, action) => {
          state.loading = true;
          state.successMessage = "";
          state.errorMessage = "";
        }
      );
  },
});

export const { reset } = crudSlice.actions;

export default crudSlice.reducer;
