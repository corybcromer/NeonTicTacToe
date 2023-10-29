import { StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const GameSquare = (props) => {

  // PROPS
  const { boardSize, index, numColumns, numOfSquares, onSquarePress, gamePiece, gamePieceColor, isMyTurn } = props

  // CONSTANTS
  const squareSize = boardSize / numColumns

  // HELPER FUNCTIONS
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
      style={[styles.gameSquare, { height: squareSize, width: squareSize }, determineBorderStyle()]}
      activeOpacity={0.1}
      underlayColor="white"
      onPress={() => onSquarePress(index)}
      disabled={(gamePiece !== null) || !isMyTurn}
    >
      {gamePiece
        ? <FontAwesome style={[styles.gamePiece, { textShadowColor: gamePieceColor }]}
          name={gamePiece}
          size={squareSize - 8}
          color={gamePieceColor}
        />
        : <View />
      }
    </TouchableHighlight>
  )
}

export default GameSquare

const styles = StyleSheet.create({
  gameSquare: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    shadowColor: "white",
    shadowOpacity: 0.7,
    shadowRadius: 12,
  },
  gamePiece: {

    textShadowRadius: 12,
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