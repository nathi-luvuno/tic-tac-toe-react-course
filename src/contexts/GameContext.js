import React, { createContext, useState } from "react";
import { genConfig } from 'react-nice-avatar'

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],

    player1: {
      choice: "x",
      name: "Nathi",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig()
    },
    player2: {
      choice: "o",
      name: "Luya",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig()
    },
    turn: "x",
    roundWinner: ""
  });


  const [roundCompleted, setRoundCompleted] = useState(false);

  const updateBoard = (index) => {
    if (game.board[index] === "x" || game.board[index] === "o" || roundCompleted) return;

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    setGame((prevGame) => ({
      ...prevGame,
      board: updatedBoard,
      turn: prevGame.turn === "x" ? "o" : "x",
    }));
  };


  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'x'
    });
    setRoundCompleted(false);
  };


  const toggleChoice = (choice) => choice === 'x' ? 'o' : 'x';


  const switchTurn = () => {
    setGame(prevGame => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice)
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice)
      },
      turn: 'x'
    }));
  };


  const updateScore = (winner) => {
    if(winner === "draw") {

        setGame(prevGame => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 0.5,
        },
        player2: {
          ...prevGame.player2,
          score: prevGame.player2.score + 0.5,
        },
        roundWinner: ""
      }));
    } else {
      setGame(prevGame => ({
        ...prevGame,
         player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 1,
        },
        roundWinner: prevGame[winner]
      }));
    } 
  };


  const roundComplete = (result) => {
    if (roundCompleted) return;
    setRoundCompleted(true);

    const winnerChoice = game.turn === 'x' ? 'o' : 'x';

    if(winnerChoice === game.player1.choice && result !=="draw") {
      updateScore("player1")
    }else if(winnerChoice === game.player2.choice && result !=="draw") {
      updateScore("player2")
    }else {
      console.log('Draw')
      updateScore("draw")
    }

    switchTurn();
  };


  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
