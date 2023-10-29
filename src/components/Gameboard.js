import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GameSquare from './GameSquare'

const GameBoard = (props) => {

  // PROPS
  const { style, boardSize, numOfSquares, numOfColumns, gameBoardData, onBoardPress, gamePiece, gamePieceColor, isMyTurn } = props

  return (
    <View style={[styles.gameBoard, { height: boardSize, width: boardSize, opacity: isMyTurn ? 1 : .3 }, style]}>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainer}
        numColumns={numOfColumns}
        scrollEnabled={false}
        data={gameBoardData}
        renderItem={({ item, index }) => <GameSquare
          boardSize={boardSize}
          index={index}
          numColumns={numOfColumns}
          numOfSquares={numOfSquares}
          onSquarePress={(index) => onBoardPress(index, gamePiece, gamePieceColor)}
          gamePiece={item.gamePiece}
          gamePieceColor={item.color}
          isMyTurn={isMyTurn}
        />}
      />
    </View>
  )
}

export default GameBoard

const styles = StyleSheet.create({
  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})