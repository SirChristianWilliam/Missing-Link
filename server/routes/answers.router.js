const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `SELECT "answer" FROM "answers"
    JOIN "user"
    ON "user"."id" = "answers"."user_id"
    JOIN "questions" 
    ON "questions"."id" = "answers"."id"
    ;`
    pool.query(sqlText)
        .then((dbRes) => {
            console.log('answers.router GET dbRes.rows is: ', dbRes.rows);
            res.send(dbRes.rows)
        })
        .catch((err) => {
            console.log('answers.router GET error: ', err);
            res.sendStatus(500);
        })
});

router.put('/', rejectUnauthenticated, (req, res) => {
    const params = [req.body.id, req.body.name, req.user.id];
    console.log('answers.router PUT params.id, name, and user id is: ', params);

    const sqlText = `
    INSERT INTO answers ("questions_id", "answer", "user_id")
    VALUES($1,$2,$3)
    ON CONFLICT ON CONSTRAINT question_user_id 
        DO
        UPDATE SET  "answer" = $2
        WHERE "answers"."user_id" = $3 AND "answers"."questions_id" = $1;`

    pool.query(sqlText, params)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('answers.router PUT error: ', err);
            res.sendStatus(500);
        })
});
router.get('/conditionResult/:id', rejectUnauthenticated, (req, res) => {
    const params = [req.params.id];
    console.log('in answers.router GET/conditionResult/:id, the params is: ', params);
    const sqlText = ` SELECT "question", "questions_id", "answer" FROM "questions"
        JOIN "answers"
        ON "answers"."questions_id" = "questions"."id"
        JOIN "user"
        ON "user"."id" = "answers"."user_id"
        JOIN "user_conditions"
        ON "user_conditions"."user_id" = "user"."id"
        WHERE "user_conditions"."con_name" = $1 AND "user_conditions"."verified" = 'verified'
        ;`
    pool.query(sqlText, params)
        .then((dbRes) => {
            console.log('in answers.router GET/conditionResult/:id, dbRes.rows is: ', dbRes.rows);
            res.send(dbRes.rows)
        })
        .catch((err) => {
            console.log('answers.router GET/conditionResult/:id error: ', err);
            res.sendStatus(500);
        })
});

module.exports = router;