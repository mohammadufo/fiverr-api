import User from "../models/User.model.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return res.status(403).json("you can delete only your account!");
  }

  await User.findByIdAndDelete(req.params.id);
  res.send(200).send("user had been deleted!");
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json("user not found!");

  res.status(200).send({
    status: true,
    data: user,
  });
};
