import React from "react";
 import '../Pokeline/Pokeline.css'
class Pokeline extends React.Component {


    render () {

        return (
            <React.Fragment>
              
                <div className="card">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemons.id}.png`} />
                    <p>{this.props.pokemons.name}</p>
                </div>
               
            </React.Fragment>
        )
    }
}

export default Pokeline