
import { useEffect } from 'react';
import Cards from '../Cards/Cards';

export default function Data({Pokedex, setPokemon, pokemon, updateScore}) {
    const P = new Pokedex()
  
    useEffect(() => {
        P.getPokemonByName([
            'pikachu', 'clefairy', 'bulbasaur', 'charizard', 'pidgey', 
            'blastoise', 'ekans', 'sandslash', 'alakazam', 'arcanine'
        ])
          .then(response => {
            // console.log(response)
            const PokemonInfo = response.map((pokemon) => ({
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              id: pokemon.id,
            }));
            // console.log(PokemonInfo)
            setPokemon(PokemonInfo)
          })
          .catch(error => console.error(error))
      }, []);
  
      return (
        <>
            <Cards pokemon={pokemon} updateScore={updateScore} />
        </>
      );
  }