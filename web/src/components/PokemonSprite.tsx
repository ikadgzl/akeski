import { Image, Modal } from "@mantine/core";

type PokemonSpriteProps = {
  src: string;
};

export const PokemonSprite = ({ src }: PokemonSpriteProps) => {
  return <Image radius="md" src={src} />;
};
