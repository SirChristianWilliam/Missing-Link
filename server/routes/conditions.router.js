const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query
        (`SELECT * FROM "conditions";`)
        .then((result) => {
            // console.log('in condition list GET', result.rows);
            res.send(result.rows);
        }).catch((err) => {
            console.log('ERROR GET /conditions ', err);
            res.sendStatus(500);
        })
});




module.exports = router;
