const pool = require("../config/pool");
const addComment = async (user_name, comment, fd_id) => {
  const res = await pool.query(
    `INSERT INTO user_reviews(user_name,comment,fd_id) VALUES($1,$2,$3) RETURNING user_name,comment,fd_id,id`,
    [user_name, comment, fd_id],
  );
  return res;
};

const getComments = async (id) => {
  const res = await pool.query(
    `SELECT id,user_name,comment FROM user_reviews WHERE fd_id=$1`,
    [id],
  );
  return res;
};
module.exports = { addComment, getComments };
