import { Button, Text, TextInput, View } from "react-native";
import Boton from "./componentes/boton";
export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "black",
          backgroundColor: "red",
          textAlign: "justify",
          width: 250,
        }}
      >
        Hello World
      </Text>
      <TextInput placeholder="Enter text here" />
      <Boton titulo="Click Me" onPress={() => console.log("Button pressed")} />
      <Button title="Click Me" onPress={() => console.log("Button pressed")} />
    </View>
  );
}
