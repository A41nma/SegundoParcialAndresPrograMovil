import { Image, Text, View } from "react-native";
export default function Componente1() {
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Crypt</Text>
      <Text style={{ fontSize: 24, marginBottom: 16, color: "Purple" }}>X</Text>
      <Image
        source={{
          uri: "../imagenes/a645553e8236bb3fa318f088857d823b90c63ecb.png",
        }}
        style={{ width: 100, height: 100, marginBottom: 16 }}
      />
    </View>
  );
}
