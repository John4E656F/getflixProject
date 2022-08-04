
import mongoose from "mongoose";

export const animes = mongoose.model('series', 
  new mongoose.Schema({
    id: Number,
    title: String,
    genre: Array,
    trailer: String,
    picture: String,
    comments: Array,
    ratings: Array
  })
  
  )



 
  