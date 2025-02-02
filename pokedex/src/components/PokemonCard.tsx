type CardProps = {
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

const PokemonCard: React.FC<CardProps> = ({
  pokedexId,
  name,
  image,
  stats,
}) => {
  return (
    <div className="card">
      <h2>
        {pokedexId} {name}
      </h2>
      <img src={image} alt={name} />
      <p>
        <strong>HP:</strong> {stats.HP}
      </p>
      <p>
        <strong>Attack:</strong> {stats.attack}
      </p>
      <p>
        <strong>Defense:</strong> {stats.defense}
      </p>
      <p>
        <strong>Sp. Attack:</strong> {stats.special_attack}
      </p>
      <p>
        <strong>Sp. Defense:</strong> {stats.special_defense}
      </p>
      <p>
        <strong>Speed:</strong> {stats.speed}
      </p>
    </div>
  );
};

export default PokemonCard;
