const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const questionsRouter = require('./routes/questions.router');
const answersRouter = require('./routes/answers.router');
const conditionsRouter = require('./routes/conditions.router');

//auth-shelf has a shelf router as well, shelf is a component where
// the information is displayed

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/questions',questionsRouter);
app.use('/api/answers',answersRouter);
app.use('/api/conditions', conditionsRouter);
// auth-shelf has app.use('/api/shelf',shelfRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
