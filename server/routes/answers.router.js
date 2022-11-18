const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/',  (req, res) => {

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

router.put('/', rejectUnauthenticated,(req,res) => {
    console.log('HEY HEY HEY BODY',req.body.name);
    const params = [req.body.name,req.body.id];
    console.log('PARAMS DO BE',params)
    const sqlText = `UPDATE "answers" 
    SET "answers" = $1
    WHERE "answers"."id" = $2;
    ;`
    pool.query(sqlText, params)
    .then((dbRes) => {
         res.sendStatus(200);
    })
    .catch((err) => {
        console.log('error updating answers in put',err);
    })
});
 
module.exports = router;
