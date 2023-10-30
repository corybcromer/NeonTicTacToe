# Neon Tic-Tac-Toe

This is a simple tic-tac-toe game created for the Bible Project's coding challenge. 👏👍🏆

## Getting Started

Clone the repo to see how I did!
```
git clone https://github.com/corybcromer/NeonTicTacToe.git
```

Install the dependencies:
```
npm install
```

Start the development server:
```
npx expo start
```

## Notes For the Evaluator

#### Scalability
I wanted to show I could create dynamic and scalable components. The game board that I created can have its size manipulated and scale accordingly by changing the `numOfColumns`, `numOfSquares`, and `boardSize`. Therefore, this board could be easily reconfigured for other grid based board games like chess or connect4.

#### Customization
I also wanted to add some fun customization. Each user could change the icon and color in the `playerOne` and `playerTwo` states. I didn't have time, but I made it so that you could add screens or modals that would allow the user to make these selections before the game. The icon could accept any string from the list of FontAwesome icons available in the [Expo Icon Library](https://icons.expo.fyi/Index).

#### Turn Order
Turn order is enforced by enabling/disabling the `onPress` event. The turn is communicated to the user through lowering the opacitiy of the board for the player whose turn it is not. 

#### Winner Logic
I know that this is a pretty common exercise, and it is even on React's official documentation page as a tutorial. Normally, I like using resources like this; however, I wanted to create my own solution. But, if this was a work scenario, I would happliy learn from and use official resources if it had a better Big O rank. 
