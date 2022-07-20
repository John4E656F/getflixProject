const mongoose = require("mongoose");

const Movie = mongoose.model(
    "Movie",
    new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        duration: { type: Number, required: true },
        date: { type: Date, required: true },
    }, {
        timestamps: true,
    })
);

module.exports = Movie;
