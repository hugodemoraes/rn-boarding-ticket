import { View, Text } from "react-native";

import { styles } from "./styles";

interface FlightProps {
  label: string;
  value: string;
}

export default function Flight({ label, value }: FlightProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
