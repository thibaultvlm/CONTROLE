export class Game {
    constructor(id, title, genre, releaseDate, developer, platform, imageUrl = 'https://via.placeholder.com/600x300/1a1a2e/00d4aa?text=No+Image') {
        this._id = id;
        this._title = title;
        this._genre = genre;
        this._releaseDate = releaseDate;
        this._developer = developer;
        this._platform = platform;
        this._imageUrl = imageUrl;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    set releaseDate(value) {
        this._releaseDate = value;
    }

    get developer() {
        return this._developer;
    }

    set developer(value) {
        this._developer = value;
    }

    get platform() {
        return this._platform;
    }

    set platform(value) {
        this._platform = value;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }
}
