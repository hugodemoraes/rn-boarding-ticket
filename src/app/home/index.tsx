import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QrCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

import { colors } from "@/styles/colors";
import Flight from "@/components/flight";
import Info from "@/components/info";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/cover.png")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Faltam 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />

            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.black} />
              <Text style={styles.hours}>11h 35m</Text>
            </View>

            <Flight label="Amsterdam" value="AMS" />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Hugo de Moraes</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="23 de Nov." />
              <Info label="Embarque" value="23:45" />
            </View>
          </View>
        </View>

        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray="5,5"
            />
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Vôo" value="YZ 666" />
              <Info label="Assento" value="29G" />
            </View>

            <View style={styles.inline}>
              <Info label="Terminal" value="6" />
              <Info label="Portão" value="27" />
            </View>
          </View>

          <QrCode value="boarding code" size={130} />
        </View>
      </View>
    </View>
  );
}
