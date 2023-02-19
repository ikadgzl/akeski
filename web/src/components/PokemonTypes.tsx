import { Button, Flex } from "@mantine/core";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { fetchTypePokemonsAtom } from "../store";

export const PokemonTypes = () => {
  const [_, fetchTypePokemons] = useAtom(fetchTypePokemonsAtom);

  const pokemonTypes = useMemo(() => {
    return [
      { name: "fire", color: "red" },
      { name: "grass", color: "green" },
      { name: "water", color: "blue" },
      { name: "bug", color: "orange" },
      { name: "poison", color: "lime" },
      { name: "electric", color: "yellow" },
      { name: "normal", color: "gray" },
    ] as const;
  }, []);

  return (
    <Flex
      sx={{
        gap: 4,
      }}
    >
      {pokemonTypes.map((type) => (
        <Button
          key={type.name}
          onClick={() => {
            fetchTypePokemons(type.name);
          }}
          variant="outline"
          compact
          sx={{
            flex: 1,
          }}
          color={type.color}
        >
          {type.name}
        </Button>
      ))}
    </Flex>
  );
};
