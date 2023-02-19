import { useAtom } from "jotai";
import { getPokemonsAtoms } from "../store";
import { PokemonItem } from "./PokemonItem";

export const PokemonList = () => {
  const [pokemons] = useAtom(getPokemonsAtoms);

  return (
    <>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => <PokemonItem pokemon={pokemon} />)
      ) : (
        <tr>
          <td>No Pokemons for you</td>
        </tr>
      )}
    </>
  );
};
