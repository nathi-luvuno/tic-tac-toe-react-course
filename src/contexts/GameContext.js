import React, { createContext, useState, useEffect } from "react";
import { checkForWinner } from "../utils/GameUtils";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    player1: {
      choice: "x",
      name: "Nathi",
    },
    player2: {
      choice: "o",
      name: "Luya",
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

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
