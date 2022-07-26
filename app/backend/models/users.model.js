const mongoose = require("mongoose");

const userDB = mongoose.createConnection(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/userdb`)
const Users = userDB.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, { collection: 'users' }) //specify the mongodb collection
);
module.exports = Users;