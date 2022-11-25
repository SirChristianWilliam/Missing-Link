const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', (req, res) => {
  // This simply gets all the questions. Gets called from questions.saga
  const sqlText = `SELECT DISTINCT "questions"."question","questions"."placeholder","questions"."id" FROM "answers"
        JOIN "user"
        ON "user"."id" = "answers"."user_id"
        RIGHT JOIN "questions"
        ON "questions"."id" = "answers"."questions_id"
        ORDER BY "id"
      ;`
  pool.query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows) //send the array of DB questions back to saga
    })
    .catch((err) => {
      console.log('questions.router GET error : ', err);
    })
});

module.exports = router;
