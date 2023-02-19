import { StyleSheet } from "react-native";
import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useAtom } from "jotai";
import { fetchPokemonsAtom } from "./store";
import { PokemonList } from "./components/PokemonList";
import { PokemonTypes } from "./components/PokemonTypes";

export const App = () => {
  const [_, fetchPokemon] = useAtom(fetchPokemonsAtom);

  const [text, setText] = useState("");

  const handleSearchPokemon = () => {
    if (!text) return;

    fetchPokemon(text.toLowerCase());
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          marginBottom: 8,
        }}
        label="Search for a Pokemon"
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => handleSearchPokemon()}
        mode="flat"
        right={<TextInput.Icon icon="pokemon-go" />}
      />

      <PokemonTypes />
      <PokemonList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(231, 224, 236, 0.25)",
    padding: 20,
    gap: 8,
  },
});
