# kitsu-fetch
A wrapper for the Kitsu API that is made to simplify things as well as provide consitent data.

### Installation
If using yarn,
```sh
$ yarn add kitsu-fetch --save
```
If using npm,
```sh
$ npm install kitsu-fetch --save
```
### Examples
Retrieve an array of Anime objects using the passed search term:
```js
const kitsu = new (require('kitsu-fetch'));

(async () => {
    let response;
    try {
        response = await kitsu.searchAnime('RWBY');
    } catch(e) {
        // Handle error with request

        console.log('Error getting anime data', e);
        return;
    }
    // Do something with the response

    console.log(response);
})();
```

### License
This project is [licensed under ISC][license].

[license]: https://github.com/hsiW/kitsu-fetch/blob/master/LICENSE
