const Kitsu = require('../');
const kitsu = new Kitsu();

kitsu.getManga(22).then(response => {
    console.log(response);
}).catch(console.error);