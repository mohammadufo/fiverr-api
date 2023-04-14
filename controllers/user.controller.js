import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.cookies.accessToken;

  const user = await User.findById(req.params.id);

  if (!token) res.status(401).send("you are not authenticated!");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (payload.id !== user._id.toString()) {
      return res.status(403).json("you can delete only your account!");
    }

    await User.findByIdAndDelete(req.params.id);
    res.send(200).send("user had been deleted!");
  });
};
