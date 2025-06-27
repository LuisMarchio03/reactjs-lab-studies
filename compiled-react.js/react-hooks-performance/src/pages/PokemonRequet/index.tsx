import axios from "axios";
import { useEffect, useState } from "react";

interface IPokemon {
  name: string;
  url: string;
}

interface IResponse {
  results: Array<IPokemon>;
}

const PokemonRequet: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>();

  const getAllPokemons = async () => {
    const { data } = await axios.get<IResponse>(
      "https://pokeapi.co/api/v2/pokemon/"
    );

    setPokemons(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemons?.map((pokemons) => (
          <li key={pokemons.name}>{pokemons.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonRequet;
