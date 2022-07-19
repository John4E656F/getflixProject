  import mongoose from 'mongoose'
  import anilist from 'anilist-node'
  const Anilist = new anilist();
  
  class Anime {
    constructor (id, title, genre, trailer, picture){
      this.id = id
      this.title = title
      this.genre = genre
      this.trailer = trailer
      this.picture = picture
    }
  }

  function createAnime(index) {
  
  var animeObj = new Anime()

  Anilist.media.anime(index).then(data => {         //index of 21708 different options
    if (data.id !== undefined) {
      animeObj.id = data.id
      animeObj.title = data.title.english
      var genresArray = [data.genres[0], data.genres[1]]
      animeObj.genre = genresArray
      animeObj.trailer = data.trailer
      animeObj.picture = data.bannerImage

      console.log(animeObj)

      mongoose.connect(`mongodb+srv://aniflex-admin:xelfina@aniflex-db.yqpgc8j.mongodb.net/animeDB`)

      var db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error: '))

      db.once('open', () => {
        console.log('Jeey, connection successfull!')

        var AnimeSchema = mongoose.Schema({
          id: Number,
          title: String,
          genre: Array,
          trailer: String,
          picture: String
        })

        var Anime = mongoose.model('animeDB', AnimeSchema, 'manga')

        var anime1 = new Anime(animeObj)      //fill in the obj

        anime1.save((err, anime) => {
          if (err) return console.error(err)
          console.log(`${anime.title} saved in db`)
        })
      })
    }
    else console.log('undefined obj in data')
  })
   
}

createAnime(59)