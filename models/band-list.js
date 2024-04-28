const { Band } = require("./band");


class BandList {
    constructor(){
        this.bands = [
            new Band('Metalica'),
            new Band('Maneskin'),
            new Band('Heroes del Silencio'),
            new Band('Breaking Benjamin')
        ]
    }

    addBand ( name ){
        const newBand = new Band( name )
        this.bands.push( newBand )
        return newBand
    }

    removeBand( id ){
        const band = this.bands.filter( band => band.id !== id )
        this.bands = band
        return band
    }
    
    getBands(){
        return this.bands
    }

    increaseVotes( id ){
        this.bands = this.bands.map( 
            band => {
                if( band.id = id ){
                    band.votes +=1
                }
                return band
            }
        )        
    }

    changeName( id, newName){
        this.bands = this.bands.map( 
            band => {
                if( band.id = id ){
                    band.name = newName
                }
                return band
            }
        )   
    }
}

module.exports = { BandList }