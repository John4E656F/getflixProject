//Express is for building the REST apis
const express = require("express");
//cors provides Express middleware to enable CORS
const cors = require("cors");
//cookie-session helps to stores the session data on the client within a cookie without requiring any database/resources on the server side
const cookieSession = require("cookie-session");


const dbConfig = require("./app/config/db.config");

//Create an Express app, then add request parsing, cookie-based session middleware and cors middlewares using app.use() method. 
const app = express();
//set origin: http://localhost:8081.
var corsOptions = {
  origin: "http://localhost:8081"
};



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "aniflex-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./app/models");
const { mongoose } = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// define a GET route which is simple for test.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Aniflex application." });
});


// routes
require("./app/routes/auth.routes");
require("./app/routes/user.routes");

// set port, listen on port 8080 for incoming requests.
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}