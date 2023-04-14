import User from "../models/User.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: "mamad",
      email: "mamad",
      password: "mamad",
    });

    await newUser.save();
    res.status(201).send("user has been created!");
  } catch (err) {
    res.status(500).send("something went wrong!");
  }
};
export const login = async (req, res) => {
  res.send("i love Alaa");
};
export const logout = async (req, res) => {
  res.send("i love Alaa");
};
