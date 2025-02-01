import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
type Pokemon = {
    name: string;
    url: string;
  };

const FetchApi = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
        .then((res) => {
        console.log("donnes :",res);
      if (res.results) {
        setPokemons(res.results);
      } 
    })
    .catch((err) => console.error("Erreur :", err));
}, []);
return (
    <div>
      {pokemons && pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => <PokemonCard key={index} name={pokemon.name} />)
      ) : (
        <p>Chargement...</p> // Affichage temporaire si `pokemons` est vide
      )}
    </div>
  );
};

export default FetchApi;
