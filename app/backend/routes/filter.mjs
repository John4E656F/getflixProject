import  mongoose  from 'mongoose'
import {animes} from '../models/animeDB.mjs'


mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

const input_string= 'Ai Yori Aoshi';



(async ()=> {
   // mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)
    try {
        const query= await animes.findOne({trailer :"https://www.youtube.com/watch?v=sy4gkY2KBik"})

        console.log('this is your query' +  query);
    } catch (e) {
        console.log(e.message);
    }
})();