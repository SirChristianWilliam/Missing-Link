const { RouterRounded } = require('@mui/icons-material');
const express = require('express');
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
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  console.log('The user loggin in is: ', req.user)
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/userkey', rejectUnauthenticated, (req, res) => {
  console.log('in user PUT to update the KEY');

  console.log('in user put', req.body.key);
  console.log(req.user.id, 'and id');
  const params = [req.user.id, req.body.key];
  const sqlText = `
    UPDATE "user" SET "key" = $2 WHERE "user"."id" = $1;
  `
  pool.query(sqlText, params)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error updating user key in put', err);
    })
});

//
router.put('/useredit', rejectUnauthenticated, (req, res) => {
  // console.log('in edituser PUT,body is',req);
  console.log('what is req.body', req.body.name);
  console.log('what is user now', req.user.id);
  const params = [req.user.id, req.body.name];
  const sqlText = `
    UPDATE "user" SET "username" = $2 WHERE "user"."id" = $1;
  `
  pool.query(sqlText, params)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error updating username in put', err);
    })
})

// router.post('/register', (req, res, next) => {
//   const username = req.body.username;
//   const password = encryptLib.encryptPassword(req.body.password);

//   const queryText = `INSERT INTO "user" (username, password)
//     VALUES ($1, $2) RETURNING id`;
//   pool
//     .query(queryText, [username, password])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('User registration failed: ', err);
//       res.sendStatus(500);
//     });
// });
// GRABBED THIS FROM SOLO-FIRST-LOOK-LECTURE, NOT SURE YET IF I NEED


module.exports = router;
