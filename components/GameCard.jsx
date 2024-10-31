import { useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Score } from './Score';

export function GameCard({game}) {
    return (
        <View className="flex-row p-4 rounded-xl gap-4 mb-10" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View>
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100}></Score>
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0,100)}...</Text>
          </View>
        </View>
    )

}


export function AnimateGameCard({game,index}) {
  const opacity  = useRef(new Animated.Value(0)).current

}


const styles = StyleSheet.create({

    card: {
      marginBottom: 42,
  
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      color: "#eee"
    },
    score: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: "green"
    }
    
  });
  