import mongoose from 'mongoose'
import {animes} from '../models/animeDB.mjs'

mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

const input_string= 'Ai Yori Aoshi';

// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', () => {
//   console.log('Jeey, connection successfull!')
// })

(async ()=> {

  try {
   const query= await animes.findOne({title: input_string})
   console.log(query);
    
  } catch (e) {
    console.log(e.message);
    
  }
})();

