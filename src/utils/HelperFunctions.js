export const checkIfWinner = (gameBoardData, numOfColumns, playerOne, playerTwo) => {
    let firstPlayerWinCounts = {
        columnOne: 0,
        columnTwo: 0,
        columnThree: 0,
        rowOne: 0,
        rowTwo: 0,
        rowThree: 0,
        diagonalOne: 0,
        diagonalTwo: 0
    }
    let secondPlayerWinCounts = {
        columnOne: 0,
        columnTwo: 0,
        columnThree: 0,
        rowOne: 0,
        rowTwo: 0,
        rowThree: 0,
        diagonalOne: 0,
        diagonalTwo: 0
    }

    gameBoardData.forEach((element, index) => {
        const xCoordinate = index % numOfColumns
        const yCoordinate = Math.floor(index / numOfColumns)
        if (playerOne.gamePiece == element.gamePiece) {
            if (xCoordinate == 0) {
                firstPlayerWinCounts.columnOne += 1
            }
            if (xCoordinate == 1) {
                firstPlayerWinCounts.columnTwo += 1
            }
            if (xCoordinate == 2) {
                firstPlayerWinCounts.columnThree += 1
            }
            if (yCoordinate == 0) {
                firstPlayerWinCounts.rowOne += 1
            }
            if (yCoordinate == 1) {
                firstPlayerWinCounts.rowTwo += 1
            }
            if (yCoordinate == 2) {
                firstPlayerWinCounts.rowThree += 1
            }
            if (xCoordinate == yCoordinate) {
                firstPlayerWinCounts.diagonalOne += 1
            }
            if (xCoordinate + yCoordinate == 2) {
                firstPlayerWinCounts.diagonalTwo += 1
            }
        }
        if (playerTwo.gamePiece == element.gamePiece) {
            if (xCoordinate == 0) {
                secondPlayerWinCounts.columnOne += 1
            }
            if (xCoordinate == 1) {
                secondPlayerWinCounts.columnTwo += 1
            }
            if (xCoordinate == 2) {
                secondPlayerWinCounts.columnThree += 1
            }
            if (yCoordinate == 0) {
                secondPlayerWinCounts.rowOne += 1
            }
            if (yCoordinate == 1) {
                secondPlayerWinCounts.rowTwo += 1
            }
            if (yCoordinate == 2) {
                secondPlayerWinCounts.rowThree += 1
            }
            if (xCoordinate == yCoordinate) {
                secondPlayerWinCounts.diagonalOne += 1
            }
            if (xCoordinate + yCoordinate == 2) {
                secondPlayerWinCounts.diagonalTwo += 1
            }
        }
    })

    if (Object.values(firstPlayerWinCounts).includes(3)) {
        return playerOne.name
    } else if (Object.values(secondPlayerWinCounts).includes(3)) {
        return playerTwo.name
    } else {
        return null
    }
}