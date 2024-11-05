
import { FlatList,View, ActivityIndicator,Pressable} from 'react-native';
import {Link} from 'expo-router';


import { useEffect, useState } from 'react';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard';
import { Logo } from './Logo';
import { InfoIcon } from './Icons';
import { Screen } from './Screen';




export function Main() {

  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0  ? (
        <ActivityIndicator color={"#fff"} size={"large"}/>
      ): (
        // <ScrollView>{games.map(game => (<GameCard key={game.slug} game={game} />))}</ScrollView>)}
        <FlatList
        data={games}
        keyExtractor={(game) => game.slug}
        renderItem={({item}) => <GameCard game={item} />}
        />
       )}

    </Screen>
  );
}

