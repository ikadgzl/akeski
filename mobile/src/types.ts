export type PokemonTypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export type PokemonType = {
  type: { name: PokemonTypeName };
};

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
};
