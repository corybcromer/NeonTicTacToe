import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import GameScreen from './src/screens/GameScreen';


export default function App() {


  return (
    <View style={styles.container} >
      <StatusBar style="light" />
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
  title: {
    fontFamily: 'Neonderthaw',
    fontSize: 48,
    color: 'white'
  },
  bottomGameBoard: {
    marginTop: 24,

  }
});
