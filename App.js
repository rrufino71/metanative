
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';



//import icon from './assets/icon.png'

export default function App() {


  return (
 <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="light" />
        <Main />
     
    </View>
 </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight+5,
    padding: 12,
  },
 
});