import { atom } from "jotai";
import { Pokemon, PokemonTypeName } from "./types";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemon = async <T>(name: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  const pokemon = await response.json();

  return pokemon;
};

export const pokemonsAtom = atom<Pokemon[]>([]);
export const getPokemonsAtoms = atom((get) => get(pokemonsAtom));

export const fetchPokemonsAtom = atom(
  (get) => get(pokemonsAtom),
  async (_, set, name: string) => {
    const pokemon = await getPokemon<Pokemon>(name);

    set(pokemonsAtom, [pokemon]);
  },
);

export const fetchTypePokemonsAtom = atom(
  (get) => get(pokemonsAtom),
  async (_, set, type: PokemonTypeName) => {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const types = (await response.json()) as {
      pokemon: { pokemon: Pokemon }[];
    };

    const pokemons = types.pokemon.map((p) => p.pokemon);
    const pokemonsPromises = pokemons.map((p) => {
      return getPokemon<Pokemon>(p.name);
    });

    const pokemonsData = await Promise.all(pokemonsPromises);

    set(pokemonsAtom, () => pokemonsData);
  },
);
