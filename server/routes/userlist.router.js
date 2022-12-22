const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    // This simply gets ONE user's lists. Gets called from questions.saga
    // I need one for ALL.
    const theUser = req.user.id;
    console.log('userlist.router GET / req.user.id is : ', theUser);
    const sqlText = `SELECT "condition_id","user_id","verified","con_name" 
    FROM "user_conditions"
    WHERE "user_id" = $1;`;
    pool.query(sqlText, [theUser])
        .then((dbRes) => {
            console.log('userlist.router GET / .then dbRes.rows: ', dbRes.rows);
            res.send(dbRes.rows) //send the array of DB questions back to saga
        })
        .catch((err) => {
            console.log('error getting dbRes', err);
        })
});

router.get('/all', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT "condition_id","user_id","verified","con_name" 
      FROM "user_conditions"
      WHERE "verified" = 'verified'`;

    pool.query(sqlText)
        .then((dbRes) => {
            // console.log('get ALL rows /all', dbRes.rows);
            res.send(dbRes.rows) //send the array of DB questions back to saga
        })
        .catch((err) => {
            console.log('in userlist.router GET/all error: ', err);
        })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('userlist.router POST, req.body is: ', req.body);
    const params = [req.body.id, req.user.id, req.body.name];
    console.log('userlist.router POST params are : ', params);
    const queryText =
        `INSERT INTO "user_conditions" ("condition_id", "user_id","con_name")
      VALUES($1,$2,$3)
      ON CONFLICT ON CONSTRAINT con_user_id 
          DO
          UPDATE SET  "condition_id" = $1, "user_id" = $2, "con_name" = $3
          WHERE "user_conditions"."con_name" = $3 AND "user_conditions"."user_id" = $2;`;
    pool.query(queryText, params).then((dbRes) => { res.sendStatus(201) })
        .catch((err) => {
            console.log('in userlist.router POST error: ', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const params = [req.user.id, req.params.id];
    console.log('userlist.router DELETE params are:', params);
    const queryText = `DELETE FROM "user_conditions" 
       WHERE "user_id" = $1 AND "condition_id" = $2;`;
    pool
        .query(queryText, params)
        .then((dbRes) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('userlist.router POST error: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;