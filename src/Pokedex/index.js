
import React from "react";

import pokemonArray from "../PokemonData"; 
import Pokecard from "../Pokecard";
import '../Pokedex/pokedex.css'
class Pokedex extends React.Component {
    constructor() {
        super()
      
    }
 
    render () {
        const values = pokemonArray;

 
  
        return (
   
     <div className="container">
        <h1>Pokemon</h1>
        <div className="pokemonsCard">
        {values.map((item, index) => <Pokecard pokemonInfo = {item} key = {index} />)}
      
     
        </div>
        <div className="pokemonBox">
            <div className="firstSection">
                <div className="boxCard">
                    <h2>Charmander</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
                    <p>Type: fire</p>
                    <p>EXP: 62</p>
                </div>
                <div className="boxCard">
                    <h2>Charmander</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
                    <p>Type: fire</p>
                    <p>EXP: 62</p>
                </div><div className="boxCard">
                    <h2>Charmander</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
                    <p>Type: fire</p>
                    <p>EXP: 62</p>
                </div><div className="boxCard">
                    <h2>Charmander</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
                    <p>Type: fire</p>
                    <p>EXP: 62</p>
                </div>
            </div>
            <button className="secondSection">Start</button>
            <div className="thirdSection">
                
            </div>
      </div>
     </div>
            
        )
    }
}

export default Pokedex