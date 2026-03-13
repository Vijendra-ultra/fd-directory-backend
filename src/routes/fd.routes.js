const { Router } = require("express");
const {
  getAllFds,
  getFdsById,
  getFdsByRating,
  addRating,
} = require("../controllers/fd.controller");
const router = Router();

router.get("/", getAllFds);
router.get("/:id", getFdsById);
router.get("/getByRating", getFdsByRating);
router.post("/:id/postRating", addRating);
module.exports = router;
