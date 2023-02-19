import { useAtom } from "jotai";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import { fetchTypePokemonsAtom } from "../store";
import { PokemonTypeName } from "../types";

export const PokemonTypes = () => {
  const [_, fetchTypePokemons] = useAtom(fetchTypePokemonsAtom);

  const handleTypePokemonSearch = (currentType: PokemonTypeName) => {
    if (!currentType) return;

    fetchTypePokemons(currentType);
  };

  const pokemonTypes = useMemo(() => {
    return [
      { name: "fire", color: "#e52d2d", icon: "fire" },
      { name: "grass", color: "#567d46", icon: "grass" },
      { name: "water", color: "#2389da", icon: "water" },
      { name: "bug", color: "#c98411", icon: "bug" },
      { name: "poison", color: "#32CD32", icon: "bottle-tonic-skull" },
      { name: "electric", color: "#ffa500", icon: "lightning-bolt" },
      { name: "normal", color: "#808080", icon: "infinity" },
    ] as const;
  }, []);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {pokemonTypes.map((type) => (
          <Button
            icon={type.icon}
            textColor={type.color}
            buttonColor="#eee"
            style={{ marginHorizontal: 2, width: 112 }}
            onPress={() => handleTypePokemonSearch(type.name)}
            key={type.name}
            mode="contained"
          >
            {type.name}
          </Button>
        ))}
      </ScrollView>
    </View>
  );
};
