import { Pressable, Text } from "react-native";

type Props = { titulo: string; onPress: () => void };

export default function Boton({ titulo, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#6552FE",
        paddingVertical: 14,
        paddingHorizontal: 115,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "#fff" }}>{titulo}</Text>
    </Pressable>
  );
}

/*import { View, Text, StyleSheet } from "react-native";
import { ReactNode } from "react";

type Props = {
  // 1. props que recibe (obligatorias y opcionales)
  titulo: string;
  subtitulo?: string;
  children?: ReactNode;
};

// 2. el componente: función con nombre en mayúscula
export default function MiComponente({ titulo, subtitulo, children }: Props) {
  // 3. lógica (useState, funciones, etc.)

  // 4. lo que dibuja
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      {subtitulo && <Text>{subtitulo}</Text>}
      {children}
    </View>
  );
}

// 5. estilos al final
const styles = StyleSheet.create({
  contenedor: { padding: 16 },
  titulo: { fontSize: 20, fontWeight: "bold" },
}); */

/*import Titulo from "../componentes/Titulo";
export default function Index() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Titulo texto="Mi página" />
      <Tarjeta>
        <Text>Contenido dentro de la tarjeta</Text>
      </Tarjeta>
      <CajaScroll texto={"Texto largo... ".repeat(100)} />
    </View>
  );
} */
