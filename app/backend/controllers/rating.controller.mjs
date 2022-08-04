import mongoose from 'mongoose'
import {animes} from '../models/animeDB.mjs'

mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`);

(async (titleOfAnime, rating)=> {

    try {
      await animes.findOne({title: titleOfAnime}, (result) => {
        var calculateAverageRating = result.ratings
        console.log(`shit is weird ${animeObject.ratings}`)
        calculateAverageRating.push(rating)
        var averageRating = calculateAverageRating.reduce((a, b) => a + b, 0) / calculateAverageRating.length;
        console.log(`The average rating for this anime is: ${averageRating}`)
      })
      const query = await animes.findOneAndUpdate({title: titleOfAnime}, {ratings: calculateAverageRating})
  
    } catch (e) {
      console.error(e.message);
    }
  })('Cowboy Bebop', 3) 