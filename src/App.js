import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Home from './container/Home/Home';
import Blackjack from './container/Blackjack/Blackjack';
import TicTacToe from './container/TicTacToe/TicTacToe';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.scss';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <SideBar />
      <div className="content-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/blackjack" component={Blackjack} />
        <Route exact path="/tictactoe" component={TicTacToe} />
      </div>
    </BrowserRouter>
  </div>
)


export default App;
