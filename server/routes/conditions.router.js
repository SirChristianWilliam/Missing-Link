const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query
        (`SELECT * FROM "conditions";`)
        .then((result) => {
            console.log('conditions.router GET result.rows is: ', result.rows);
            res.send(result.rows);
        }).catch((err) => {
            console.log('conditions.router GET error:  ', err);
            res.sendStatus(500);
        })
});

module.exports = router;