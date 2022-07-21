const Kitsu = require('../');
const kitsu = new Kitsu();

kitsu.searchAnime('kancolle').then(response => {
    console.log(response);
}).catch(console.error);