import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          {/* <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
          </Pressable> */}
          <StyledPressable className={`active:opacity-50`}>
            <HomeIcon />
          </StyledPressable>
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
    </Screen>
  );
}
