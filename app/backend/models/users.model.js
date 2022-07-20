const mongoose = require("mongoose");
const Users = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, { collection: 'userdb' }) //specify the mongodb collection
);
module.exports = Users;