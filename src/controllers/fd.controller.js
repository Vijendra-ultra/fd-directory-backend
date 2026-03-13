const fdService = require("../services/fds.services");
const getAllFds = async (req, res, next) => {
  try {
    const fds = await fdService.getAllFds();
    res.status(200).json({ count: fds.length, data: fds });
  } catch (err) {
    next(err);
  }
};

const getFdsById = async (req, res, next) => {
  try {
    const fd = await fdService.getFdsByID();
    return res.status(200).json({ data: fd });
  } catch (err) {
    next(err);
  }
};
const getFdsByRating = async (req, res, next) => {
  try {
    const { orderby = "desc" } = req.params;

    const data = await fdService.getFdsByRating(orderby);
    res.status(200).json({ count: data.length, data: data });
  } catch (err) {
    next(err);
  }
};
const addRating = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 10) {
      res.status(400).json({ message: "Rating must be between 1 and 10" });
    }
    const res = await fdService.addRating(id, rating);
    if (res.rowCount === 0) {
      res.status(404).json({ message: "Fixed deposits doesn't exist" });
    }
    res.status(200).json({ message: "Ratings added successfully." });
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllFds, getFdsById, getFdsByRating, addRating };
