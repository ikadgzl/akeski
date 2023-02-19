import { useAtom } from "jotai";
import { DataTable } from "react-native-paper";
import { getPokemonsAtoms } from "../store";
import { PokemonItem } from "./PokemonItem";

export const PokemonList = () => {
  const [pokemons] = useAtom(getPokemonsAtoms);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Height</DataTable.Title>
        <DataTable.Title>Weight</DataTable.Title>
        <DataTable.Title>Types</DataTable.Title>
      </DataTable.Header>

      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <DataTable.Row>
          <DataTable.Cell>No Pokemons</DataTable.Cell>
        </DataTable.Row>
      )}
    </DataTable>
  );
};
