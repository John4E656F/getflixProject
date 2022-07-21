const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const Anime = require('./Anime');
const Character = require('./Character');
const Manga = require('./Manga');
const User = require('./User');

module.exports = class Kitsu {
	constructor() {
		this.baseURL = 'https://kitsu.io/api/edge';
	}

	async searchAnime(searchArgs, pageOffset = 0) {
		const params = new URLSearchParams({ 'filter[text]': searchArgs, 'page[offset]': pageOffset });
		const response = this._request(`/anime?${params.toString()}`);

		return response.map(anime => new Anime(anime.id, anime.attributes));
	}

	async getAnime(animeID) {
		const anime = await _request(`/anime/${animeID}`);

		return new Anime(anime.id, anime.attributes);
	}

	async searchManga(searchArgs, pageOffset = 0) {
		const params = new URLSearchParams({ 'filter[text]': searchArgs, 'page[offset]': pageOffset });
		const response = this._request(`/manga?${params.toString()}`);

		return response.map(manga => new Manga(manga.id, manga.attributes));
	}

	async getManga(mangaID) {
		const manga = await _request(`/manga/${mangaID}`);

		return new Manga(manga.id, manga.attributes);
	}

	async searchCharacters(searchArgs, pageOffset = 0) {
		const params = new URLSearchParams({ 'filter[name]': searchArgs, 'page[offset]': pageOffset });
		const response = this._request(`/characters?${params.toString()}`);

		return response.map(character => new Character(character.id, character.attributes));
	}

	async getCharacter(characterID) {
		const character = await _request(`/characters/${characterID}`);

		return new Character(character.id, character.attributes);
	}

	async searchUsers(searchArgs) {
		const params = new URLSearchParams({ 'filter[name]': searchArgs });
		const response = this._request(`/users?${params.toString()}`);

		return response.map(user => new User(user.id, user.attributes));
	}

	async getUser(userID) {
		const user = await _request(`/users/${userID}`);

		return new User(user.id, user.attributes);
	}

	async _request(url) {
		const response = await fetch(`${this.baseURL}${url}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.api+json',
				'Content-Type': 'application/vnd.api+json',
			},
		});

		return (await response.json()).data;
	}
}
