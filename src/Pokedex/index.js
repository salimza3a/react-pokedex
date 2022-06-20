
import React from "react";

import pokemonArray from "../PokemonData"; 
import Pokecard from "../Pokecard";
import Pokeline from '../Pokeline'
import '../Pokedex/pokedex.css'

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = {
            pokemonTeamOne: [],
            pokemonTeamTwo: [],
            teamOneScore: 0,
            teamTwoScore: 0,
        }
        this.generateCards = this.generateCards.bind(this)
      
    }
    generateCards() {
        let firstRandomTeam = [];
        let secondRandomTeam = [...pokemonArray]
       while (firstRandomTeam.length < secondRandomTeam.length) {
        let randomNum = Math.floor(Math.random() * secondRandomTeam.length)
        let randomDeletedArray = secondRandomTeam.splice(randomNum, 1)[0];
        firstRandomTeam = [...firstRandomTeam, randomDeletedArray]
        
       }
      let firstSum =  firstRandomTeam.reduce((acc,currentValue) => acc + currentValue.base_experience,0);
      let secondSum =  secondRandomTeam.reduce((acc,currentValue) => acc + currentValue.base_experience,0);
 
       this.setState({pokemonTeamOne: firstRandomTeam, pokemonTeamTwo: secondRandomTeam, teamOneScore: firstSum, teamTwoScore: secondSum})
       console.log(firstRandomTeam, "first team")
       console.log(secondRandomTeam, "second team")
    }

 
    render () {
        
        const values = pokemonArray;

        let firstSum = this.state.teamOneScore;
        let secondSum = this.state.teamTwoScore;
      
  
        return (
            <div className="container">
                <h1>Pokemon</h1>
                <div className="scoreBox">
                    <h2>Team 1: {firstSum} {firstSum > secondSum ? " you won" : firstSum < secondSum ? " you lost" : ""}</h2>
                    <h2>Team 2: {secondSum}{secondSum > firstSum  ?  " you won" : secondSum < firstSum ? " you lost" : ""}</h2>
                </div>
            <div className="pokemonBox">
            <div className="firstSection">
             
             {this.state.pokemonTeamOne.map((item, index) => <Pokecard pokemonDatas = {item} key = {index} />)}
            </div>
            <button className="secondSection" onClick={this.generateCards}>Start</button>
            <div className="thirdSection">
            {this.state.pokemonTeamTwo.map((item, index) => <Pokecard pokemonDatas = {item} key = {index} />)}
         
            </div>
          </div>
          <div className="cardWrapper">
          {pokemonArray.map((item,index) => <Pokeline pokemons = {item} key = {`pokemon-value-${index}`} />)}
          </div>
          </div>
            
        )
    }
}

export default Pokedex


{/* <div className="boxCard">
<h2>Charmander</h2>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>
<p>Type: fire</p>
<p>EXP: 62</p>
</div> */}