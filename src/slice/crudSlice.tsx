import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import ReducerInitialState from "constants/reducerInitialState";

import axios from "axios";
import { axiosApi } from "axiosInstance";

const initialState = {
  ...ReducerInitialState,
  error: {} as any,
};

export const getEntities = createAsyncThunk<
  any,
  { pageName: string },
  { rejectValue: string }
>("data/fetchValue", async ({ pageName }, { rejectWithValue }) => {
  try {
    const response = axiosApi.get(`${pageName}/getEntities`);
    return response;
  } catch (error) {
    if (error) {
      return rejectWithValue("failed");
    }
  }
});

export const getEntityById = createAsyncThunk<
  any,
  { pageName: string; id: number },
  { rejectValue: string }
>("data/fetchById", async ({ pageName, id }, { rejectWithValue }) => {
  try {
    const response = axiosApi.get(`${pageName}/${id}`);
    return response;
  } catch (error) {
    if (error) {
      return rejectWithValue("failed");
    }
  }
});

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
    builder
      .addCase(deleteEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "supplier deleted successFully";
      })
      .addCase(getEntityById.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data.data;
      })
      .addMatcher(
        isRejected(getEntities, addEntity, deleteEntity, getEntityById),
        (state, action) => {
          state.loading = false;
          state.errorMessage = "something went wrong";
        }
      )

      .addMatcher(
        isPending(getEntities, addEntity, deleteEntity, getEntityById),
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
