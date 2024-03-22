const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc get user details
//@route GET/api/users/all
//@access public
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

//@desc add user
//@route GET/api/users/add
//@access public
const addUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email } = req.body;

  if (!firstName || !lastName || !phone || !email) {
    res.status(400);
    throw new Error("Pleas add details");
  }

  const user = await User.create({
    firstName,
    lastName,
    phone,
    email,
  });

  res.status(200).json(user);
});

//@desc update user
//@route GET/api/users/add
//@access public
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

//@desc delete user
//@route GET/api/users/add
//@access public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.deleteOne();
  res.status(200).json({id:req.params.id});
});

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
