import { useCallback, useState } from "react";
import { Text } from "react-native";
import { Avatar, DataTable, Modal, Portal } from "react-native-paper";
import { Pokemon, PokemonType } from "../types";
import { PokemonSprite } from "./PokemonSprite";

type PokemonItemProps = {
  pokemon: Pokemon;
};

export const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  const [showSprite, setShowSprite] = useState(false);

  const getPokemonType = (type: PokemonType[]) => {
    const types = type.map((type) => type.type.name);

    return types.join(", ");
  };

  const ShowSprite = useCallback(() => {
    if (showSprite) {
      return (
        <PokemonSprite
          showSprite={showSprite}
          setShowSprite={setShowSprite}
          uri={pokemon.sprites.front_default}
        />
      );
    }

    return null;
  }, [showSprite]);

  return (
    <>
      <DataTable.Row onPress={() => setShowSprite(true)} key={pokemon.id}>
        <DataTable.Cell>{pokemon.name}</DataTable.Cell>
        <DataTable.Cell>{pokemon.height}</DataTable.Cell>
        <DataTable.Cell>{pokemon.weight}</DataTable.Cell>
        <DataTable.Cell>{getPokemonType(pokemon.types)}</DataTable.Cell>
      </DataTable.Row>

      <ShowSprite />
    </>
  );
};
