const getAllFds = async () => {
  const res = await pool.query(
    `SELECT * FROM fixed_deposits ORDER BY created_at LIMIT 100`,
  );
  return res.rows;
};
const getFdsByID = async (id) => {
  const res = pool.query(`SELECT * FROM fixed_deposits where id=$1`, id);
  return res.rows[0];
};
const getFdsByRating = async (orderBy) => {
  const res = pool.query(
    `SELECT * FROM fixed_deposits ORDER BY ratings LIMIT 100`,
  );
  return res.rows;
};
module.exports = { getAllFds, getFdsByID, getFdsByRating };
