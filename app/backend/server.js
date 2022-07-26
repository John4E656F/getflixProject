//Express is for building the REST apis
const express = require("express");
//cors provides Express middleware to enable CORS
const cors = require("cors");
//cookie-session helps to stores the session data on the client within a cookie without requiring any database/resources on the server side
// const cookieSession = require("cookie-session");

require('dotenv').config();

//Create an Express app, then add request parsing, cookie-based session middleware and cors middlewares using app.use() method. 
const app = express();
//set origin: http://localhost:8081.
// var corsOptions = {
//   origin: "http://localhost:5002"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   cookieSession({
//     name: "aniflex-session",
//     secret: "COOKIE_SECRET", // should use as secret environment variable
//     httpOnly: true
//   })
// );

const connectDB = require("./config/connectDB");

// Connection to DB
connectDB();


// routes
// require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');


app.use('/user', usersRouter);

// set port, listen on port 8080 for incoming requests.
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }