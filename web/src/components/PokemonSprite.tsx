import { Image, Modal } from "@mantine/core";

type PokemonSpriteProps = {
  showSprite: boolean;
  setShowSprite: (showSprite: boolean) => void;
  name: string;
  src: string;
};

export const PokemonSprite = ({
  src,
  name,
  setShowSprite,
  showSprite,
}: PokemonSpriteProps) => {
  return (
    <Modal
      opened={showSprite}
      onClose={() => setShowSprite(false)}
      title={name}
      size="xs"
    >
      <Image radius="md" src={src} />
    </Modal>
  );
};
