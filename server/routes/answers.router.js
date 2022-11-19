const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/',  (req, res) => {

    const sqlText = `SELECT "answer" FROM "answers"
    JOIN "user"
    ON "user"."id" = "answers"."user_id"
    JOIN "questions" 
    ON "questions"."id" = "answers"."id"
    ;`
    pool.query(sqlText)
    .then((dbRes) => {
        console.log('dbRes ROW is', dbRes.rows);
        res.send(dbRes.rows)
    })
    .catch((err) => {
        console.log('error getting dbRes answers',err);
        res.sendStatus(500);
    })
});

router.put('/', rejectUnauthenticated,(req,res) => {
    console.log('What is the inputs value? : ',req.body.name); // This comes from the input's value
    console.log('What is the inputs question ID? : ', req.body.id); //This comes from the question's id
    console.log('What is the users id? : ', req.user.id); // The user who is currently logged in
    const params = [ req.body.name, req.body.id, req.user.id];
    console.log('What are the params of all those above console logs? : ',params);
    
   
    const sqlText = `INSERT INTO answers(answer, questions_id, user_id)
    VALUES($1,$2,$3)
    ON CONFLICT (user_id ) DO
        UPDATE SET answer = $1
        WHERE "answers"."user_id" = $3;`
    pool.query(sqlText, params)
    .then((dbRes) => {
         res.sendStatus(200);
    })
    .catch((err) => {
        console.log('error updating answers in put',err);
    })
});
 
module.exports = router;
