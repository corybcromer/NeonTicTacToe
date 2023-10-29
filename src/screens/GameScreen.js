import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import GameBoard from '../components/GameBoard';
import { checkIfWinner } from '../utils/HelperFunctions';

const GameScreen = () => {

    // CONSTANTS
    const boardSize = (Dimensions.get('window').height - 300) / 2
    const numOfSquares = 9
    const numOfColumns = 3
    const dataOfSquare = { gamePiece: null, color: null }
    const initialGameBoardData = Array(numOfSquares).fill(dataOfSquare)


    // STATES
    const [gameBoardData, setGameBoardData] = useState(initialGameBoardData)
    const [isFirstPlayersTurn, setIsFirstPlayersTurn] = useState(true)
    // Can pick any color and gamePiece from the FontAwesome library https://icons.expo.fyi/Index
    const [playerOne, setPlayerOne] = useState({ gamePiece: 'close', color: 'cyan', name: 'Player 1' })
    const [playerTwo, setPlayerTwo] = useState({ gamePiece: 'circle-o', color: 'violet', name: 'Player 2' })
    const [moveCount, setMoveCount] = useState(0)

    // EFFECTS
    useEffect(() => {
        // Checks each move if there is a winner or a tie game
        const winner = checkIfWinner(gameBoardData, numOfColumns, playerOne, playerTwo)
        if (winner) {
            Alert.alert(`${winner} Won!`, `Congrats ${winner} on winning the game! Restart the game to play again.`, [
                { text: 'Reset', onPress: () => resetGame() },
            ])
        } else if (moveCount == 9) {
            Alert.alert('Tie Game', 'No one won. Restart the game to play again.', [
                { text: 'Reset', onPress: () => resetGame() },
            ])
        }

    }, [gameBoardData])

    // HELPER FUNCTIONS & USER ACTIONS
    const onBoardPress = (index, gamePiece, color) => {
        console.log(index, gamePiece)
        setGameBoardData((prev) => {
            const newGameBoardData = [...prev]
            newGameBoardData[index] = { "gamePiece": gamePiece, "color": color }
            return newGameBoardData
        })
        setIsFirstPlayersTurn((prev) => !prev)
        setMoveCount((prev) => prev + 1)
    }

    const resetGame = () => {
        setMoveCount(0)
        setIsFirstPlayersTurn(true)
        setGameBoardData(initialGameBoardData)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Tic-Tac-Toe</Text>
                <GameBoard
                    boardSize={boardSize}
                    numOfSquares={numOfSquares}
                    numOfColumns={numOfColumns}
                    dataOfSquare={dataOfSquare}
                    gameBoardData={gameBoardData}
                    gamePiece={playerOne.gamePiece}
                    gamePieceColor={playerOne.color}
                    onBoardPress={onBoardPress}
                    isMyTurn={isFirstPlayersTurn}
                />
                <GameBoard style={styles.bottomGameBoard}
                    boardSize={boardSize}
                    numOfSquares={numOfSquares}
                    numOfColumns={numOfColumns}
                    dataOfSquare={dataOfSquare}
                    gameBoardData={gameBoardData}
                    gamePiece={playerTwo.gamePiece}
                    gamePieceColor={playerTwo.color}
                    onBoardPress={onBoardPress}
                    isMyTurn={!isFirstPlayersTurn}
                />

            </SafeAreaView>
        </View>
    );
}

export default GameScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 48,
        color: 'yellow',
        fontWeight: 'bold',
        textShadowColor: 'yellow',
        textShadowRadius: 12,
    },
    bottomGameBoard: {
        marginTop: 24,

    }
});
