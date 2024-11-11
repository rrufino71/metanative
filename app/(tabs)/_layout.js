import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon, SignInIcon } from "../../components/Icons";
import { AuthProvider } from "../context/AuthContext";

export default function TabsLayout() {
  return (
    <AuthProvider>
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

        <Tabs.Screen
          name="signin"
          options={{
            title: "Sig In",
            tabBarIcon: ({ color }) => <SignInIcon color={color} />,
            tabBarActiveTintColor: "yellow",
            tabBarInactiveTintColor: "white",
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
