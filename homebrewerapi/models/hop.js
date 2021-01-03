class Hop {
    constructor({_id, _rev, name, alphaAcidLow, alphaAcidHigh, substitutes, desc, country, styles, forBittering, forAroma}) {
        this._id = _id
        this._rev = _rev
        this.name = name
        this.alphaAcidLow = alphaAcidLow
        this.alphaAcidHigh = alphaAcidHigh
        this.substitutes = substitutes
        this.desc = desc
        this.country = country
        this.styles = styles
        this.forBittering = forBittering
        this.forAroma = forAroma
    }
}

module.exports = Hop;