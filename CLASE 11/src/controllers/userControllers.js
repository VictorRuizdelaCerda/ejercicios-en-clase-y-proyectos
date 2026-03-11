import User from "../models/user.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const createUser = async (req, res) => {
  const { name, age, address } = req.body;
  if (!name)
    return res.status(400).json({ error: "The name of user is required" });

  const user = await User.create({ name, age, address });
  res.status(201).json({ message: "User created", user });
};

export const updateUser = async (req, res) => {
  const { name, age, address } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = name || user.name;
  user.age = age || user.age;
  user.address = address || user.address;

  await user.save();
  res.json({ message: "Updated user", user });
};

export const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.destroy();
  res.json({ message: "Deleted user" });
};