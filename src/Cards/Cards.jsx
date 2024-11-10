import './Cards.css';

export default function Cards({pokemon, updateScore}) {
    return (
        <div className="cards">
          {pokemon.map((poke) => (
            <button onClick={() => updateScore(poke.id)} className="card" key={poke.id}>
              <img src={poke.image} alt={poke.name} />
              <h3>{poke.name}</h3>
            </button>
          ))}
        </div>
      );
}