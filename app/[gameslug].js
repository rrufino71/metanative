import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Detalle del juego",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo == null ? (
          <ActivityIndicator color={"#ffff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100}></Score>
              <Text className="text-white font-bold mb-8 text-2xl text-center">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left text-base ">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
