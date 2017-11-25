import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// functional component
function Square(props) {
  let userColorClass = 'square ';
  let nextUserClass = 'next-user';
  let nextUser = props.next ? 'X' : 'O';

  if (props.order === 'X') {
    userColorClass += 'square-x-user';
    nextUserClass = 'hidden';
  }
  else if (props.order === 'O') {
    userColorClass += 'square-o-user';
    nextUserClass = 'hidden';
  }

  return (
    <button className={userColorClass} onClick={props.onClick}>
      <span>{props.order}</span>
      <div className={nextUserClass}>
        <span>{nextUser}</span>
      </div>      
    </button>
  );
}
// https://reactjs.org/tutorial/tutorial.html#storing-a-history
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();

    // if no one won yet and button area is empty, skip
    // else return
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  renderSquare(i) {
        
    return <Square next={this.state.xIsNext} order={this.state.squares[i]} onClick={() => 
      this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <span>tic tac toe</span>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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

  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />, document.getElementById('root')
);


// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       letter: null
//     };
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => 
//         this.props.onClick()}>
//         {this.props.order}
//       </button>
//     );
//   }
// }