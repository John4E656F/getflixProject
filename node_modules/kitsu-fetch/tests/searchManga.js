const Kitsu = require('../');
const kitsu = new Kitsu();

kitsu.searchManga('orange').then(response => {
    console.log(response);
}).catch(console.error);