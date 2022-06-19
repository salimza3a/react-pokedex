
import React from "react"

import '../Pokecard/card.css'

class Pokecard extends React.Component {

    
    render () {
       
        return(
            <React.Fragment>
    
            <div className="card">
              <img src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemonInfo.id}.png`} />
              <h2>{this.props.pokemonInfo.name}</h2>
            </div>
      
          
            </React.Fragment>
        ) 
    }
}

export default Pokecard