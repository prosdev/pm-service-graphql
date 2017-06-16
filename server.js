import express from 'express';
import {
    graphqlExpress,
    graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
const MongoStore = require('connect-mongo')(session);
import schema from './src/schema/schema';
import cors from 'cors';
// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major <= 7 && minor <= 5) {
    console.log('🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou\'re on an older version of node that doesn\'t support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n ');
    process.exit();
}
require('dotenv').config({ path: 'variables.env' });
// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!
//import all of our models
require('./src/models/Property');
require('./src/models/Transaction');

const PORT = 4000;
const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
// Takes the raw requests and turns them into usable properties on req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// populates req.cookies with any cookies that came along with the request
server.use(cookieParser());
server.use(expressValidator());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
server.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// // Passport JS is what we use to handle our logins
server.use(passport.initialize());
server.use(passport.session());

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.listen(PORT, () =>
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
