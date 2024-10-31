import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>

      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
      <Text className="text-white/90 mb-4">
        Mollit dolore exercitation fugiat ea sunt magna. Eiusmod irure fugiat
        velit nulla ea amet incididunt exercitation id ea irure ex consectetur
        ex. Ullamco ullamco ea excepteur excepteur elit ad veniam. Est commodo
        mollit veniam veniam nisi et tempor esse. Nisi fugiat aliquip dolor
      </Text>
    </ScrollView>
  );
}
