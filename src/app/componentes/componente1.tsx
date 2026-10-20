import { Image, Text, View } from "react-native";

export default function Componente1() {
  return (
    <View>
      <view>
        <Text
          style={{
            fontSize: 64,
            marginBottom: 16,
            color: "white",
            fontWeight: "700",
          }}
        >
          Crypt
        </Text>
        <Text style={{ fontSize: 64, marginBottom: 16, color: "#6552FE" }}>
          X
        </Text>
      </view>
      <Image
        source={require("../imagenes/a645553e8236bb3fa318f088857d823b90c63ecb.png")}
        style={{ width: 366.6, height: 366.5, marginTop: 151.5, left: 36.75 }}
      />
    </View>
  );
}
