const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
//YO I MIGHT NOT EVEN NEED THIS. (ANSWERS.ROUTER/ ANSWERS REDUCER/ ANSWERS SAGA/ )
/**
 * GET route template
 */
router.get('/',  (req, res) => {
    // GET route code here
    // console.log('IN ANSWERS ROUTER TTOTOOTOTOTOTOT');

    const sqlText = `SELECT "answers" FROM "answers"
    JOIN "user"
    ON "user"."id" = "answers"."user_id"
    JOIN "questions" 
    ON "questions"."id" = "answers"."id"
    ;`
    pool.query(sqlText)
    .then((dbRes) => {
        console.log('dbRes ROW is', dbRes.rows)
        res.send(dbRes.rows)
    })
    .catch((err) => {
        console.log('error getting dbRes answers');
    })
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
