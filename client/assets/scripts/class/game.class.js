export class Games {
    _id;
    _title;
    _genre;
    _releaseDate;
    _developer;
    _platform;

    constructor(id, title, genre, releaseDate, developer, platform) {
        this._id = id;
        this._title = title;
        this._genre = genre;
        this._releaseDate = releaseDate;
        this._developer = developer;
        this._platform = platform;
    }

    get _id() {
        return this._id;
    }

    set _id(value) {
        this._id = value;
    }

    get _title() {
        return this._title;
    }

    set _title(value){
        this._title = value;
    }
    
    get _genre() {
        return this._genre;
    }

    set _genre(value) {
        this.genre = value;
    }

    get _releaseDate() {
        return this._releaseDate;
    }

    set _releaseDate(value) {
        this._releaseDate = value;
    }

    get _developer() {
        return this._developer;
    }

    set _developer(value) {
        this.developer = value;
    }
}