import pool from "../services/db"

export const listPeople = async () => {
  const people = await pool.query("SELECT * FROM people")
  return people.rows
}
