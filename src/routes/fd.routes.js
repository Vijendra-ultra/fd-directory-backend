const { Router } = require("express");
const {
  getAllFds,
  getFdsById,
  getFdsByRating,
} = require("../controllers/fd.controller");
const router = Router();

router.get("/", getAllFds);
router.get("/:id", getFdsById);
router.get("/getByRating", getFdsByRating);
module.exports = router;
