  import mongoose from 'mongoose'
  import anilist from 'anilist-node'
  import {animes} from '../models/animeDB.mjs'
  import {jikan} from 'jikan-nodejs'
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
              picture: data.bannerImage,
              comments: [],
              description: data.description
            })
            await new_title.save();
            console.log("new title" + new_title);
          }catch (e){
            console.log(e.message);
          }
        
        })();

      }
      else console.log('undefined obj in data') 
    })
   
  }

  function updateAnime(index) {
    Anilist.media.anime(index).then(data => {         //index of 21708 different options
      if (data.id !== undefined) {

        //console.log(data.description)
      
        (async() => {
          try{
            const newDescription = data.description
            const description = await animes.findOneAndUpdate({id: index}, {description: newDescription})
            console.log(description)
          }
          catch (e){
            console.error(e.message);
          }
        
        })();

      }
      else console.log('undefined obj in data') 
    })
  }

  async function tryJikan () {
    const animes = await jikan.animesByGenre(1, {limit: 30})
    console.log(animes)
  }

  //create
tryJikan();
