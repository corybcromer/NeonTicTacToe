import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const GameSquare = (props) => {

  const { index, numColumns, numOfSquares, gamePiece } = props

  const size = (Dimensions.get('window').width - 16) / numColumns

  const determineBorderStyle = () => {
    // Takes the index of the square, the number of columns, and total num of squares to determine which border to show
    const tempIndex = index + 1
    const firstIndexOfLastRow = numOfSquares - numColumns

    if (tempIndex <= numColumns) {
      switch (tempIndex) {
        case 1:
          return styles.topLeftBorder
        case numColumns:
          return styles.topRightBorder
        default:
          return styles.topBorder
      }
    } else if (tempIndex <= firstIndexOfLastRow) {
      switch (tempIndex % numColumns) {
        case 1:
          return styles.leftBorder
        case 0:
          return styles.rightBorder
        default:
          return styles.insideBorder
      }
    } else if (tempIndex > firstIndexOfLastRow) {
      switch (tempIndex % numColumns) {
        case 1:
          return styles.bottomLeftBorder
        case 0:
          return styles.bottomRightBorder
        default:
          return styles.bottomBorder
      }
    } else {
      return null
    }
  }

  return (
    <TouchableHighlight
      style={[styles.gameSquare, { height: size, width: size }, determineBorderStyle()]}
      activeOpacity={0.1}
      underlayColor="white"
      onPress={() => console.log('Pressed')}
      isDisabled={gamePiece !== null}
    >
      { gamePiece === 'X' ?
      <FontAwesome name="close" size={size - 8} color="cyan" /> 
      : gamePiece === 'O' ?
      <FontAwesome name="circle-o" size={size - 8} color="violet" />
      : <View/>
}
    </TouchableHighlight>
  )
}

export default GameSquare

const styles = StyleSheet.create({
  gameSquare: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  topLeftBorder: {
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  topRightBorder: {
    borderLeftWidth: 4,
    borderBottomWidth: 4,
  },
  topBorder: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  leftBorder: {
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  rightBorder: {
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
  },
  insideBorder: {
    borderWidth: 4,
  },
  bottomLeftBorder: {
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomRightBorder: {
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  bottomBorder: {
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
  },
})