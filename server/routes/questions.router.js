const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

/**
 * GET route template
 */
router.get('/',  (req, res) => {
    // GET route code here
    console.log('QUEEEEEEEESTIONS ROUTER' );

    const sqlText = `SELECT "questions"."question","questions"."placeholder" FROM "answers"
        JOIN "user"
        ON "user"."id" = "answers"."user_id"
        JOIN "questions"
        ON "questions"."id" = "answers"."questions_id";`
    pool.query(sqlText)
    .then((dbRes) => {
        console.log('dbRes ROW is returning the questions')
        res.send(dbRes.rows)
    })
    .catch((err) => {
        console.log('error getting dbRes',err);
    })
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
