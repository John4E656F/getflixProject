import  mongoose  from 'mongoose'
import {animes} from '../models/animeDB.mjs'


mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', () => {
//   console.log('Jeey, connection successfull!')
// })

(async ()=> {
    try {
        const query= await animes.find({genre:{'0':'Adventure'} })
        console.log('this is your query' +  query);
    } catch (e) {
        console.log(e.message);
    }
})();