import React, { Fragment } from 'react';
import Square from './Square';

export function Board({ handleSquareClickCallBack, squares }) {

    const renderBoard = () => {
        return (
            <table>
                <tbody>
                    {renderBoardRow(0)}
                    {renderBoardRow(1)}
                    {renderBoardRow(2)}
                </tbody>
            </table>
        )
    }

    const renderBoardRow = (rowNum) => {
        return (
            <tr>
                <Square value={squares[rowNum * 3]} onHandleClick={() => handleSquareClickCallBack(rowNum * 3)} />
                <Square value={squares[rowNum * 3 + 1]} onHandleClick={() => handleSquareClickCallBack(rowNum * 3 + 1)} />
                <Square value={squares[rowNum * 3 + 2]} onHandleClick={() => handleSquareClickCallBack(rowNum * 3 + 2)} />
            </tr>
        )
    }

    return (
        <Fragment>
            {renderBoard()}
        </Fragment>
    )
}

export default Board;