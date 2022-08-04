
//import mongoose from "mongoose";
const mongoose = require('mongoose');

const animes =new mongoose.Schema({
  id: Number,
  title: String,
  genre: Array,
  trailer: String,
  picture: String
})

module.exports=  mongoose.model("series", animes);


 
  