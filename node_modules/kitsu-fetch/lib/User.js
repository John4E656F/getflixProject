module.exports = class User {
	constructor(id, data) {
		this.id = id;

		this.names = {
			current: data.name,
			past: data.pastNames || [],
		}

		this.about = data.about || null;
		this.bio = data.bio || null;
		this.website = data.website || null;
		this.location = data.location || null;
		this.gender = data.gender || null;
		this.birthday = data.birthday || null;

		this.lifeSpentOnAnime = data.lifeSpentOnAnime || 0;
		this.ratingsCount = data.ratingsCount || 0;

		this.createdAt = Date.parse(data.createdAt);
		this.updatedAt = Date.parse(data.updatedAt) || null;

		this.followersCount = data.followersCount || 0;
		this.followingCount = data.followingCount || 0;

		this.images = {
			avatarImage: data.avatar,
			coverImage: data.coverImage,
		}
	}

	get url() {
		return `https://kitsu.io/users/${this.id}/`;
	}
}
