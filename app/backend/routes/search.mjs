import mongoose from 'mongoose'
import {animes} from '../models/animeDB.mjs'

mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

const input_string= 'Ai Yori Aoshi';

class Comment {
  constructor(user, comment) {
    this.user = user
    this.comment = comment
  }
}


(async ()=> {

  try {
   const query= await animes.findOne({title: input_string})
   //console.log(query.genre);
    
  } catch (e) {
    console.log(e.message);
    
  }
})();

(async (titleOfAnime, user, comment)=> {

  const testComment = new Comment(user, comment)
  try {
    const animeObject = await animes.findOne({title: titleOfAnime})
    var arrayOfComments = animeObject.comments
    arrayOfComments.push(testComment)
   const query= await animes.findOneAndUpdate({title: titleOfAnime}, {comments: arrayOfComments})
   console.log(query)
    
  } catch (e) {
    console.error(e.message);
  }
})('Cowboy Bebop', 'Jomama', 'I like this show so much I can die in peace now')           // search on title ('string'), name of user ('string'), actual comment('string')
