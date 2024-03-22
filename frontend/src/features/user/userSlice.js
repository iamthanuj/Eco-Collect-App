import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add user
export const addUser = createAsyncThunk(
  "users/add",
  async (userData, thunkAPI) => {
    try {
      return await userService.addUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all users
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      return await userService.getUsers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//edit user
export const updateUser = createAsyncThunk(
  "users/update",
  async (updatedUser, thunkAPI) => {
    try {
      return await userService.updateUser(updatedUser);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (userId, thunkAPI) => {
    try {
      return await userService.deleteUser(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // add user
      .addCase(addUser.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.users = [...state.users, action.payload];
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get all users
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //update user
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;

        const updatedUser = state.users.map((user) => {
          if (user._id === action.payload._id) return action.payload;
          return user;
        });
        state.users = updatedUser;
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })

      // Delete mentor
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.id
        );
      });
  },
});

export const { userReset } = userSlice.actions;
export default userSlice.reducer;
