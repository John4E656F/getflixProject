//Express is for building the REST apis
const express = require("express");
//cors provides Express middleware to enable CORS
const cors = require("cors");
//cookie-session helps to stores the session data on the client within a cookie without requiring any database/resources on the server side
// const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

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

const db_util = require("./routes/databaseUtils.js")
const animeDB = require ("./models/animeDB");

// Connection to DB
//connectDB();


// routes
// require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');


app.use('/user', usersRouter);

// set port, listen on port 8080 for incoming requests.
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




app.get('/animes', (req, res)=> {
  // res.send(db_util.pullAnimes())

   animeDB.find({}, function (err, result){
  //  console.log('TYPE OF ' + typeof result)
    if(err){
      res.send(err);
    }else{
      
      // res.send(JSON.stringify(result))
      res.send(result[2].title)
    } 
   })
})