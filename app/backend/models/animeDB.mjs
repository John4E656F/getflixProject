
import mongoose from "mongoose";

export const animes = mongoose.model('animes', 
  new mongoose.Schema({
    id: Number,
    title: String,
    genre: Array,
    trailer: String,
    picture: String
  })
  
  )



 
  