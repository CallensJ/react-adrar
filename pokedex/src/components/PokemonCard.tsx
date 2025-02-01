

type CardProps = {
    name: string;
  };
  
  const PokemonCard = ({ name }: CardProps) => {
    return <div className="card">{name}</div>;
  };
  
export default PokemonCard