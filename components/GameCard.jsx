import { useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';
import {styled} from 'nativewind';

const StyledPressable = styled(Pressable);


export function GameCard({game}) {
    return (
      <Link href={`/${game.slug}`} asChild>
        <StyledPressable className='active:opacity-70 border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4'>
        <View className="flex-row  gap-4 " key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100}></Score>
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0,100)}...</Text>
          </View>
        </View>
        </StyledPressable>
      </Link>
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
  