const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
 
router.get('/',  (req, res) => {
  
    const sqlText = `SELECT "questions"."question","questions"."placeholder","questions"."id" FROM "answers"
        JOIN "user"
        ON "user"."id" = "answers"."user_id"
        JOIN "questions"
        ON "questions"."id" = "answers"."questions_id"
        ORDER BY "id";`
    pool.query(sqlText)
    .then((dbRes) => {
         res.send(dbRes.rows)
    })
    .catch((err) => {
        console.log('error getting dbRes',err);
    })
});

module.exports = router;
