const fds = require("../services/fds.services");
const getAllFds = async (req, resizeBy, next) => {
  try {
    const fds = await fd.getAllFds();
    res.json({ status: "success", count: fds.length, data: fds });
  } catch (err) {
    next(err);
  }
};

const getFdsById = async (req, res, next) => {
  try {
    const fd = await fds.getFdsByID();
    return res.json({ status: "success", data: fd });
  } catch (err) {
    next(err);
  }
};
const getFdsByRating = async (req, res) => {
  try {
    const data = await fds.getFdsByRating(req.headers.orderby);
    res.json({ status: "success", count: data.length, data: data });
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllFds, getFdsById, getFdsByRating };
