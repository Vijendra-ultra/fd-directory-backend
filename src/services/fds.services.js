const pool = require("../config/pool");
const getAllFds = async () => {
  const res = await pool.query(
    `SELECT * FROM fixed_deposits ORDER BY created_at LIMIT 100`,
  );
  return res.rows;
};
const getFdsByID = async (id) => {
  const res = await pool.query(`SELECT * FROM fixed_deposits where id=$1`, [
    id,
  ]);
  if (res.rows.length === 0) {
    return "FD_NOT_FOUND";
  }
  return res.rows[0];
};
const getFdsByRating = async (orderBy) => {
  const res = await pool.query(
    `SELECT * FROM fixed_deposits ORDER BY ratings ${orderBy} LIMIT 100`,
  );
  return res.rows;
};
const addRating = async (id, rating) => {
  const res = await pool.query(
    `UPDATE fixed_deposits SET ratings=$1  WHERE id=$2`,
    [rating, id],
  );
  return res;
};
module.exports = { getAllFds, getFdsByID, getFdsByRating, addRating };
