const Kitsu = require('../');
const kitsu = new Kitsu();

kitsu.getCharacter(5).then(response => {
    console.log(response);
}).catch(console.error);