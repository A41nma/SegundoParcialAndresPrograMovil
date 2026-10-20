import { View } from "react-native";
import Boton from "./componentes/boton";
import Componente1 from "./componentes/componente1";
import Componente2 from "./componentes/componente2";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Componente1 />
      <Componente2 />
      <Boton titulo="Get Started" onPress={() => alert("Botón presionado")} />
    </View>
  );
}
