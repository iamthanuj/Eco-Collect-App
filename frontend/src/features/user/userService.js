import axios from "axios";
const API_URL = "http://localhost:5000/api/users/";

// add new user
const addUser = async (userData) => {
  const response = await axios.post(API_URL + "add", userData);
  return response.data;
};

// Get all users
const getUsers = async () => {
  const response = await axios.get(API_URL + "all", {});
  return response.data;
};

// Update user
const updateUser = async (updatedUser) => {
  const data = updatedUser.updatedUserData;
  const response = await axios.put(
    API_URL + "update/" + `${updatedUser._id}`,
    data
  );
  return response.data;
};

// Delete user
const deleteUser = async (userId) => {
  const response = await axios.delete(API_URL + "delete/" + userId, {});
  return response.data;
};



const userService = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};

export default userService;
