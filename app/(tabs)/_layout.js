import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Acerca",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "white",
        }}
      />
    </Tabs>
  );
}
