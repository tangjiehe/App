import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ hideSideMenu, showSideMenu }) => {
    const getClassName = () => {
        return showSideMenu ? 'sidemenu isShow' : 'sidemenu';
    }
    return (
        <div className={getClassName()}>
            <button className="close" onClick={hideSideMenu}>×</button>
            <Link to="/" onClick={hideSideMenu}>Home</Link>
            <Link to="/blackjack" onClick={hideSideMenu}>Blackjack</Link>
            <Link to="/tictactoe" onClick={hideSideMenu}>TicTacToe</Link>
        </div>
    )
}

export default SideMenu;
