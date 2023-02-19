import { Avatar, Modal, Portal } from "react-native-paper";

type PokemonSpriteProps = {
  showSprite: boolean;
  setShowSprite: (showSprite: boolean) => void;
  uri: string;
};

export const PokemonSprite = ({
  setShowSprite,
  showSprite,
  uri,
}: PokemonSpriteProps) => {
  return (
    <Portal>
      <Modal
        visible={showSprite}
        onDismiss={() => setShowSprite(false)}
        contentContainerStyle={{
          marginBottom: "auto",
          marginTop: 80,
          shadowColor: "transparent",
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Avatar.Image
          size={120}
          source={{
            uri,
          }}
        />
      </Modal>
    </Portal>
  );
};
