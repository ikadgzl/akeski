import {
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Paper,
  Table,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { NoPokemons } from "./components/NoPokemon";
import { PokemonList } from "./components/PokemonList";
import { fetchPokemonsAtom, fetchTypePokemonsAtom } from "./store";

const useStyles = createStyles(() => ({
  formStyle: {
    display: "flex",
    gap: 16,
  },
}));

// TODO:
// 1) Loading indicator.
// 2) Error handling.
// 3) Pagination.
function App() {
  const [pokemons, fetchPokemon] = useAtom(fetchPokemonsAtom);
  const [_, fetchTypePokemons] = useAtom(fetchTypePokemonsAtom);

  const [currentType, setCurrentType] = useState<string | null>(null);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
    },
    clearInputErrorOnChange: true,
    validate: {
      name: (value) => {
        if (!value) return "Pokemon name is required!";
      },
    },
  });

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
    <Container
      sx={{
        marginTop: 128,
      }}
      size="sm"
    >
      <Paper
        shadow="xs"
        p="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Title
          sx={{
            textAlign: "center",
            fontVariant: "small-caps",
            fontWeight: "lighter",
          }}
        >
          Search your pokemon!
        </Title>

        <form
          className={classes.formStyle}
          onSubmit={form.onSubmit((values) => fetchPokemon(values.name))}
        >
          <TextInput
            sx={{ flex: 3 }}
            placeholder="Enter pokemon name"
            {...form.getInputProps("name")}
          />
          <Button sx={{ flex: 1 }} type="submit">
            Search
          </Button>
        </form>

        <Table
          sx={{
            marginBottom: 4,
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.length > 0 ? <PokemonList /> : <NoPokemons />}
          </tbody>
        </Table>

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
                setCurrentType(type.name);
              }}
              disabled={currentType === type.name}
              variant="outline"
              compact
              sx={{
                flex: 1,
                pointerEvents: currentType === type.name ? "none" : "auto",
                cursor: currentType === type.name ? "no-drop" : "pointer",
              }}
              color={type.color}
            >
              {type.name}
            </Button>
          ))}
        </Flex>
      </Paper>
    </Container>
  );
}

export default App;
