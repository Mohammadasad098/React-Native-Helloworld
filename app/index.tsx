import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World</Text>
      <Link href={'about'}>About</Link>
      <Link href={'contact'}>Contact</Link>
      <Link href={'services'}>Services</Link>
    </View>
  );
}
