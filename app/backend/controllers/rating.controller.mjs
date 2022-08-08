import mongoose from 'mongoose'
import {animes} from '../models/animeDB.mjs'

mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`);

const addRatingToDBandCalculateAverage = async (req, res) => {

    try {

      var {newAddedRating} = req.body

      //if (!dataFromDB)
      
      const dataFromDB = await animes.findOne({title: 'Cowboy Bebop'}, 'ratings')
      
      var calculateAverageRating = dataFromDB.ratings
      
      calculateAverageRating.push(newAddedRating)
      
      //console.log(dataFromDB)
      //console.log(`this is de ratings: ${dataFromDB.ratings}`)

      var averageRating = calculateAverageRating.reduce((a, b) => a + b, 0) / calculateAverageRating.length;
      //console.log(`The average rating for this anime is: ${averageRating}`)

      const query = await animes.findOneAndUpdate({title: 'Cowboy Bebop'}, {ratings: calculateAverageRating})
  
    } catch (e) {
      console.error(e.message)
    }
  } 

  module.exports = addRatingToDBandCalculateAverage;