const { Router } = require("express");
const {
  getAllFds,
  getFdsById,
  getFdsByRating,
  addRating,
  addFd,
} = require("../controllers/fd.controller");
const router = Router();

router.get("/", getAllFds);
router.get("/:id", getFdsById);
router.get("/getByRating", getFdsByRating);
router.post("/:id/postRating", addRating);
route.post("/addFd", addFd);
module.exports = router;
