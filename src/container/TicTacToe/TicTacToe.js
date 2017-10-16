import React, { useState, useEffect } from 'react';
import Board from './Board';
import { bestMove, checkWinner } from '../../util/minimax';
import '../../styles/TicTacToe/TicTacToe.scss';

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXturn, setXTurn] = useState(true);

    useEffect(getComputerMove, [isXturn]);


    function getComputerMove() {
        if (isXturn || checkWinner(squares)) {
            return;
        }
        const copySquares = squares.slice();
        copySquares[bestMove(squares)] = '○';
        setSquares(prevState => copySquares);
        setXTurn(true);
    }

    const handleSquareClick = index => {
        const winner = checkWinner(squares);
        if (squares[index] || winner) {
            return;
        }
        const copySquares = squares.slice();
        copySquares[index] = '✕';
        setSquares(prevState => copySquares);
        setXTurn(false);
    }

    const renderResetButton = () => {
        return (
            <button aria-label="Reset Board" onClick={onClearBoard}>Reset Board</button>
        )
    }

    const onClearBoard = () => {
        setXTurn(true);
        setSquares(Array(9).fill(null));
    }

    return <div id="tictactoe">
        <Board squares={squares} handleSquareClickCallBack={handleSquareClick} />
        {renderResetButton()}
    </div>
}

export default TicTacToe;