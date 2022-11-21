const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
 
router.get('/', rejectUnauthenticated, (req, res) => {
  // This simply gets the ALL user's lists. Gets called from questions.saga
    const theUser = req.user.id;
    
    console.log('whats theUser? : ', theUser);
    const sqlText = `SELECT "condition_id","user_id","verified" 
    FROM "user_conditions"
    WHERE "user_id" = $1;`;
    pool.query(sqlText,[theUser])
    .then((dbRes) => {
        console.log('the rows arrrreeee',dbRes.rows);
         res.send(dbRes.rows) //send the array of DB questions back to saga
    })
    .catch((err) => {
        console.log('error getting dbRes',err);
    })
});

router.post('/',rejectUnauthenticated, (req, res) => {
   console.log('req body',req.body);
    const params = [req.body.id, req.user.id]
    console.log(params,'params are')
    const queryText = `INSERT INTO "user_conditions" (condition_id, user_id)
      VALUES ($1, $2);`;
    pool
      .query(queryText, params)
      .then((dbRes) => {res.sendStatus(201) 
    })
      .catch((err) => {
        console.log('POST add list failed: ', err);
        res.sendStatus(500);
      });
  });

//I will need to post for the specific user,
//I will need to insert for the specific user,
// and I'll need to pull from the user's id,
// AND I'll need to delete for the user all in here
module.exports = router;
