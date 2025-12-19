export class Studio {
    constructor(id, name, location, founded, founder, employees, imageUrl = 'https://via.placeholder.com/300x300/1a1a2e/9b59b6?text=No+Image') {
        this._id = id;
        this._name = name;
        this._location = location;
        this._founded = founded;
        this._founder = founder;
        this._employees = employees;
        this._imageUrl = imageUrl;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get founded() {
        return this._founded;
    }

    set founded(value) {
        this._founded = value;
    }

    get founder() {
        return this._founder;
    }

    set founder(value) {
        this._founder = value;
    }

    get employees() {
        return this._employees;
    }

    set employees(value) {
        this._employees = value;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }
}
