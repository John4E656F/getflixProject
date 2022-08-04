//import  mongoose  from 'mongoose'
//import {animes} from '../models/animeDB.mjs'
const mongoose = require('mongoose');
const animes= require('../models/animeDB.js');




const input_string= 'Ai Yori Aoshi';
(()=> {
    mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`);
})();

async function pullAnimes(){
    let arr= []
    // mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)
    try {
        const query= await animes.find({})
        arr.push(JSON.stringify(query))
        //console.log(arr)
         return arr;
         
    } catch (e) {
        console.log(e.message);
    }
} 

pullAnimes();
module.exports= {
    pullAnimes,
}
