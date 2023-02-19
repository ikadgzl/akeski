import {
  Button,
  Container,
  createStyles,
  Paper,
  Table,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonTypes } from "./components/PokemonTypes";
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
  const [_, fetchPokemon] = useAtom(fetchPokemonsAtom);

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
          onSubmit={form.onSubmit((values) => {
            fetchPokemon(values.name.toLowerCase());
            form.reset();
          })}
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
            <PokemonList />
          </tbody>
        </Table>

        <PokemonTypes />
      </Paper>
    </Container>
  );
}

export default App;
