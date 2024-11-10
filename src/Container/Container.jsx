import Data from "../Data/Data";
import Scores from "../Scores/Scores";
import './Container.css';
import { Pokedex } from 'pokeapi-js-wrapper';
import { useState } from 'react';

export default function Container() {

    const [pokemon, setPokemon] = useState([])
    const [pokeId, setPokeId] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [gameComplete, setGameComplete] = useState(false)

    // Reset game
    function resetGame(){
        setGameComplete(false)
        setBestScore(0)
        setScore(0)
        setPokeId([])
    }
   
    // OnClick update score and ID
    function updateScore(pokemonId){
        // Shuffle array
        setPokemon(pokemon.sort(() => Math.random() - 0.5))
        // Check if game is complete
        if(score === pokemon.length -1){
            setGameComplete(true)
        }
        // Check if ID is selected or not
        if (!pokeId.includes(pokemonId)) {
            setScore(score + 1)
            setPokeId([...pokeId, pokemonId])
        } 
        else if (pokeId.includes(pokemonId)) {
            if(bestScore > score) {
                setScore(0)
                setPokeId([])
            } 
            else{
                setBestScore(score)
                setScore(0)
                setPokeId([])
            }
        }
    }

    return (
        <div className={`container_parent full_width ${gameComplete ? 'game_complete' : ''}`}>
            <div className="fixed_width">
                <div className="title_and_scores">
                    {!gameComplete ? (
                        <h1>Pokemon Memory Game</h1>
                    ):
                    <div className="completed">
                        <h1>Game Complete!</h1>
                        <button onClick={resetGame}>Play Again?</button>
                    </div>
                    }
                    <Scores score={score} bestScore={bestScore}/>
                </div>
                <Data Pokedex={Pokedex} pokemon={pokemon} setPokemon={setPokemon} updateScore={updateScore}/>
            </div>
        </div>
      );
}