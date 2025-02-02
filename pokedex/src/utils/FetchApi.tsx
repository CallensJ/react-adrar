import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
// http://howtojs.io/how-to-use-fetch-api-with-async-await-try-catch-then-catch-in-useeffect-hook-in-react-application/
// https://kentcdodds.com/blog/using-fetch-with-type-script

const API_URL = "https://pokebuildapi.fr/api/v1/pokemon/limit/20";

type Pokemon = {
  pokedexId: number;
  name: string;
  image: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
};

const FetchApi = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Données :", data);
        setPokemons(data);
      })
      .catch((err) => console.error("Erreur :", err));
  }, []);
  return (
    <div>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.pokedexId}
            name={pokemon.name}
            image={pokemon.image}
            stats={pokemon.stats}
          />
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default FetchApi;
