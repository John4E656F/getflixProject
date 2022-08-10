const mongoose = require("mongoose");

const animeDB = mongoose.createConnection(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)
const Animes = animeDB.model(
    "Animes",
    new mongoose.Schema({
        id: { type: String, required: true },
        title: { type: String, required: true },
        genre: { type: Array, required: true },
        trailer: { type: String, required: true },
        picture: { type: String, required: true },
        comments: { type: Array, required: true },
        ratings: { type: Array, required: true },
    }, {
        collection: 'series'
    })
);

module.exports = Animes;
