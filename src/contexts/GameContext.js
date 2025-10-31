import React, { createContext, useState, useEffect } from "react";
import { checkForWinner } from "../utils/GameUtils";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    player1: {
      choice: "x",
      name: "Nathi",
      score: 0
    },
    player2: {
      choice: "o",
      name: "Luya",
      score: 0
    },
    turn: "x",
  });

  const updateBoard = (index) => {
    if (game.board[index] === "x" || game.board[index] === "o") return;

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    setGame((prevGame) => ({
      ...prevGame,
      board: updatedBoard,
      turn: prevGame.turn === "x" ? "o" : "x",
    }));
  };

  useEffect(() => {
    if (game.board.some((cell) => cell === "x" || cell === "o")) {
      checkForWinner(game.board);
    }
  }, [game.board]);

  const resetBoard = () => {
    setGame({
      ...game,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    })
  }

  const roundComplete = () => {
    if(game.turn === game.player1.choice) {
      console.log('Player 1 wins')
    }else if(game.turn === game.player2.choice) {
      console.log('Player 2 wins')
    }else {
      console.log('Draw')
    }
  }

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
