const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('search.router GET req.body is: ', req.body);
    pool.query
        (`SELECT "name" FROM "conditions";`)
        .then((result) => {
            console.log('search.router GET result.rows is ', result.rows);
            res.send(result.rows);
        }).catch((err) => {
            console.log('search.router GET error ', err);
            res.sendStatus(500);
        })
});

module.exports = router;
