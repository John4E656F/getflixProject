  import mongoose from 'mongoose'
  import anilist from 'anilist-node'
  import {animes} from '../models/animeDB.mjs'
  const Anilist = new anilist();
  
  mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

  function createAnime(index) {

  Anilist.media.anime(index).then(data => {         //index of 21708 different options
    if (data.id !== undefined) {
     
      (async() => {
        try{
          const new_title = await animes.create({
            id: data.id,
            title: data.title.english,
            genre:  [data.genres[0], data.genres[1]],
            trailer: data.trailer,
            picture: data.bannerImage
  
          })
          await new_title.save();
          console.log("new title" + new_title);
        }catch (e){
          console.log(e.message);
        }
    
      })();

      var db = mongoose.connection
      db.on('error', console.error.bind(console, 'connection error: '))
      db.once('open', () => {
        console.log('Jeey, connection successfull!')
      })
    }
    else console.log('undefined obj in data') 
  })
   
}
createAnime(50);
createAnime(51);
createAnime(53);
