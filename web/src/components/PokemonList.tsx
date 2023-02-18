import { useAtom } from "jotai";
import { getPokemonsAtoms } from "../store";
import { PokemonItem } from "./PokemonItem";

export const PokemonList = () => {
  const [pokemons] = useAtom(getPokemonsAtoms);

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonItem pokemon={pokemon} />
      ))}
    </>
  );
};
