import User from "../models/user.Model.js";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const savedData = await newUser.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const ID = req.params.id;
    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userExist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const ID = req.params.id;
    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedData = await User.findByIdAndUpdate(ID, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const ID = req.params.id;
    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(ID);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {}
};
