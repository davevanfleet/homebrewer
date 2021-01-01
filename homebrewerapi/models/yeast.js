class Yeast {
    constructor({name, _id, _rev}) {
        this._id = _id
        this._rev = _rev
        this.name = name
    }
}

module.exports = Yeast;