const commentService = require("../services/comments.service");
const addComment = async (req, res, next) => {
  try {
    const { user_name, comment, fd_id } = req.body;
    if (
      !user_name ||
      !comment ||
      user_name.length > 20 ||
      comment.length > 500 ||
      !fd_id
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Data is broken" });
    }
    const response = await commentService.addComment(user_name, comment, fd_id);
    if (response.rowCount === 1) {
      return res.status(201).json({ success: true, data: response?.rows[0] });
    }
    return res
      .status(500)
      .json({ success: false, message: "Failed to add comment." });
  } catch (err) {
    next(err);
  }
};
const getComments = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await commentService.getComments(id);
    if (data.rows.length > 0) {
      return res
        .status(200)
        .json({ success: true, count: data.rows.length, data: data.rows });
    }
    return res
      .status(200)
      .json({ success: true, message: "Be the first one to write reviews." });
  } catch (err) {
    next(err);
  }
};
module.exports = { addComment, getComments };
