
import React from "react"

import '../Pokecard/card.css'

class Pokecard extends React.Component {

    
    render () {
       console.log(this.props.pokemonDatas)
        return(
            <React.Fragment>
    
              <div className="boxCard">
                <h2>{this.props.pokemonDatas.name}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemonDatas.id}.png`} />
                <p>Type:{this.props.pokemonDatas.type}</p>
                <p>EXP: {this.props.pokemonDatas.base_experience}</p>
              </div>
          
            </React.Fragment>
        ) 
    }
}

export default Pokecard