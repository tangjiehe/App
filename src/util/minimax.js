export const checkWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let count = 0;
    for (let square of squares) {
        if (square !== null) {
            count++;
        }
    }
    if (count === 9) {
        return 't';
    }

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const scores = {
    '✕': -10,
    '○': 10,
    't': 0
};

export function bestMove(board) {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== null) {
            continue;
        }
        board[i] = '○';
        let score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
            bestScore = score;
            move = i;
        }
    }
    return move;
}

function minimax(board, depth, isMaximizing) {
    let result = checkWinner(board);
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            // Is the spot available?
            if (board[i] !== null) {
                continue;
            }
            board[i] = '○';
            let score = minimax(board, depth + 1, false);
            board[i] = null;
            bestScore = Math.max(score, bestScore);
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            // Is the spot available?
            if (board[i] !== null) {
                continue;
            }
            board[i] = '✕';
            let score = minimax(board, depth + 1, true);
            board[i] = null;
            bestScore = Math.min(score, bestScore);
        }
        return bestScore;
    }
}
