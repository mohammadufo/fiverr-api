import createError from "../utils/createError.js";
import Gig from "../models/Gig.model.js";

// export const createGig = async (req, res) => {
//   if (!req.isSeller)
//     return next(createError(403, "Only sellers can create a gig!"));
//   const newGig = new Gig({
//     userId: req.userId,
//     ...req.body,
//   });

//   try {
//     const savedGig = await newGig.save();
//     res.status(201).json({
//       status: true,
//       data: savedGig,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return res.status(403).send("Only sellers can create a gig!");

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json({
      status: true,
      data: savedGig,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteGig = (req, res) => {
  res.send("i love Alaa");
};
export const getGig = (req, res) => {
  res.send("i love Alaa");
};
export const getAllGigs = (req, res) => {
  console.log("i love Alaa");
};
