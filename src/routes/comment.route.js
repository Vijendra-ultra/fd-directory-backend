const { Router } = require("express");
const {
  addComment,
  getComments,
} = require("../controllers/comment.controller");
const router = Router();
router.post("/addComment", addComment);
router.get("/:id", getComments);
module.exports = router;
