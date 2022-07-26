import  mongoose  from 'mongoose'
import {animes} from '../models/animeDB.mjs'

const input_genre= 'Drama';


(()=> {
    mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)
    console.log('mongoosle connect');
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', () => {
    console.log('Jeey, connection successfull!')
})
})();
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', () => {
//   console.log('Jeey, connection successfull!')
// })

(async ()=> {
    try {
        const query= await animes.find({"genre":{"$in":[`${input_genre}`]}})
        console.log('this is your query' +  query);
    } catch (e) {
        console.log(e.message);
    }
})();