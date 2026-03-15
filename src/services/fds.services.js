const pool = require("../config/pool");
const addFd = async (name, description, colours) => {
  const res = await pool.query(
    `INSERT INTO fixed_deposits(name,description,rating,colours) VALUES($1,$2,0,$3)`,
    [name, description, colours.split(",")],
  );
  return res;
};
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
module.exports = { addFd, getAllFds, getFdsByID, getFdsByRating, addRating };
