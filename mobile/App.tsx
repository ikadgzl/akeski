import { Provider as PaperProvider } from "react-native-paper";
import { App } from "./src";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
