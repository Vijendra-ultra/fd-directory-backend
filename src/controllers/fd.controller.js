const fdService = require("../services/fds.services");
const addFd = async (req, res, next) => {
  try {
    const hexColorRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    const { name, description, colours } = req.body;
    const colourArr = colours.split(",");
    if (!name || !description || !colours)
      return res.status(400).json({ success: false, message: "Broken data" });
    if (
      name.length > 20 ||
      description.length > 400 ||
      colours.split(",").length > 3
    ) {
      return res
        .status(400)
        .json({ success: false, message: "The data is too long or broken." });
    }
    for (let i = 0; i < 3; i++) {
      if (!hexColorRegex.test(colourArr[i])) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid colour code." });
      }
    }
    const response = await fdService.addFd(name, description, colours);
    if (response.rowCount === 1) {
      return res
        .status(201)
        .json({ success: true, message: "Fd is successfully inserted." });
    }
    return res
      .status(500)
      .json({ success: false, message: "Failed to add fd." });
  } catch (err) {
    next(err);
  }
};
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
    const fd = await fdService.getFdsByID(req.params.id);
    if (fd === "FD_NOT_FOUND") {
      return res.status(404).json({ ok: false, message: "Fd not found" });
    }
    return res.status(200).json({ ok: true, data: fd });
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
module.exports = { addFd, getAllFds, getFdsById, getFdsByRating, addRating };
