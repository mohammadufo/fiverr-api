import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hashedPass = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({ ...req.body, password: hashedPass });

    await newUser.save();
    res.status(201).json({
      status: true,
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const err = new Error();
    err.status = 404;
    err.message = "user not found!";

    if (!user) return next(err);

    const correctUser = bcrypt.compareSync(req.body.password, user.password);
    if (!correctUser)
      return res.status(400).send("wrong password or username!");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, { httpOnly: true }).status(200).json({
      status: true,
      data: info,
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res.send("i love Alaa");
};
