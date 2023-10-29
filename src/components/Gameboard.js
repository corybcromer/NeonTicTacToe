import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GameSquare from './GameSquare'

const Gameboard = () => {

  const numOfSquares = 9
  const numOfColumns = 3 
  const dataOfSquare = {gamePiece: null}
  const initialGameboardData = Array(numOfSquares).fill(dataOfSquare)

  console.log(initialGameboardData)

  const [gameboardData, setGameboardData] = useState(initialGameboardData)


  return (
    <View style={styles.gameBoard}>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainer}
        numColumns={numOfColumns}
        columnWrapperStyle={{justifyContent: 'space-between', }}  
        scrollEnabled={false}
        data={gameboardData}
        renderItem={({item, index}) => <GameSquare
          index={index}
          numColumns={numOfColumns}
          numOfSquares={numOfSquares}
          gamePiece={item.gamePiece}
        />}
      />
    </View>
  )
}

export default Gameboard

const styles = StyleSheet.create({
  gameBoard: {
    width: Dimensions.get('window').width - 16,
    height: Dimensions.get('window').width - 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
listContainer: {

},
listContentContainer: {


},
})