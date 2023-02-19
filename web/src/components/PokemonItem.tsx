import { Avatar, Box, Modal } from "@mantine/core";
import { useCallback, useState } from "react";
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
          name={pokemon.name}
          src={pokemon.sprites.front_default}
          setShowSprite={setShowSprite}
          showSprite={showSprite}
        />
      );
    }

    return null;
  }, [showSprite]);

  return (
    <Box
      onClick={() => {
        setShowSprite(true);
      }}
      component="tr"
      key={pokemon.id}
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} component="td">
        <Avatar src={pokemon.sprites.front_default} radius="md" size="lg" />
        {pokemon.name}
      </Box>
      <td>{pokemon.height}</td>
      <td>{pokemon.weight}</td>
      <td>{getPokemonType(pokemon.types)}</td>

      <ShowSprite />
    </Box>
  );
};
