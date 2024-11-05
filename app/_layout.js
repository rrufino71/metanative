import { Slot, Stack, Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    // stack es como slote pero no recarga y funciona con la navegacion del dispositivo
    // slot permite manejar uno mismo la navegacion
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <InfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

<View className="flex-row justify-between items-center mb-4 mx-2">
  <View>
    <Logo />
  </View>
  {/* asChild se usa cuando el contenido es otro objeto */}
  <Link asChild href="/about">
    <Pressable>
      <InfoIcon />
    </Pressable>
  </Link>
</View>;
