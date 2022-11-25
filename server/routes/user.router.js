const { RouterRounded, Update } = require('@mui/icons-material');
const express = require('express');
const { select } = require('redux-saga/effects');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const queryText = `INSERT INTO "user" (username, password, "firstName", "lastName",email)
    VALUES ($1, $2, $3,$4,$5) RETURNING id`;
  pool
    .query(queryText, [username, password, firstName, lastName, email])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('user.router user registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  console.log('user.router user loggin in is: ', req.user)
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/userkey', rejectUnauthenticated, async (req, res) => {
  try {
    const params = [req.body.id, req.body.key];
    console.log('user.router PUT/userkey params: ', params);
    const selectSql = `
  SELECT * FROM "conditions"
  WHERE "conditions"."access_key" = $2 AND "conditions"."id" = $1;`

    const selectRes = await pool.query(selectSql, params);
    console.log('user.router PUT/userkey selectRes.rows is : ', selectRes.rows);

    if (selectRes.rows.length < 1) {
      res.sendStatus(400);
      return;
    }

    const putSql = `
    UPDATE  "user_conditions" 
    SET  "verified" = 'verified' 
    WHERE "user_id" = $1 AND "condition_id" = $2;
  `
    const updateParams = [req.user.id, req.body.id];
    const putRes = await pool.query(putSql, updateParams);//not sure if needed
    res.sendStatus(200);
  }
  catch (error) {
    console.log('user.router PUT/userkey error :', error);
    res.sendStatus(500);
  }
});

router.put('/useredit', rejectUnauthenticated, (req, res) => {
  const params = [req.user.id, req.body.name];
  console.log('user.router PUT/useredit params is : ', params);
  const sqlText = `
    UPDATE "user" SET "username" = $2 WHERE "user"."id" = $1;
  `
  pool.query(sqlText, params)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('user.router PUT/useredit error', err);
    })
});

router.put('/editemail', rejectUnauthenticated, (req, res) => {
  const params = [req.user.id, req.body.email];
  console.log('user.router PUT/editemail params :', params);
  const sqlText = `
    UPDATE "user" SET "email" = $2 WHERE "user"."id" = $1;
  `
  pool.query(sqlText, params)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('user.router PUT/editemail error', err);
    })
});

module.exports = router;
