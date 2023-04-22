import Gig from "../models/Gig.model.js";

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

export const deleteGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig.userId === req.userId)
      return res.status(403).send("you can delete only your gig!");

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig deleted successfully!");
  } catch (err) {
    console.log(err);
  }
};
export const getGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) return res.status(404).send("gig not found!");

    res.status(200).send({
      status: true,
      data: gig,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllGigs = async (req, res) => {
  const gigs = await Gig.find();

  res.status(200).send({
    status: true,
    length: gigs.length,
    data: gigs,
  });
};
