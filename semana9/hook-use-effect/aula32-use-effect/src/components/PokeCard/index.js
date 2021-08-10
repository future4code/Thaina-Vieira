import axios from "axios";
import React, {useState} from "react";

export function PokeCard (props) {
    const [pokemon, setPokemon] = useState ({})
}

  
  const pegaOPokemon = () => {
    setPegaPokemon(props.pokemon);
  }

 
  const atualizaPokemon = (prevProps) => {
    if (prevProps.pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }

  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });

  };

  render() {
    const pokemon = pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}

