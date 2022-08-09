// import mongoose from 'mongoose'
const mongoose = require('mongoose');
const animes = require('../models/animeDB.js');
(()=> {
    mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)
    console.log('mongoosle connect');
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', () => {
    console.log('Jeey, connection successfull!')
})
})();



//pull all animes from animes collection
 async function pullAnimes(){
    try {
       let query = await animes.find({})
       console.log(query);

    } catch (e) {
        console.log(e.message)
    }
}


module.exports = {
    pullAnimes,
}

