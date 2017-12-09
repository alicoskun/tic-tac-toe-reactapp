import React from 'react';
import Square from './Square';
import Modal from './Modal';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            modalVisible: false,
            isOver: false,
            status: 'Next player: X'
        };
    }
    restartGame = () => {
        this.setState({
            squares: this.state.squares.fill(null),
            xIsNext: true,
            modalVisible: false,
            isOver: false,
            status: 'Next player: X'
        });
    }
    // show restart model
    showModal = () => {
        this.setState({
            modalVisible: true
        });
    }
    // hide restart model
    hideModal = () => {
        this.setState({
            modalVisible: false
        });
    }
    handleClick = (i) => {
        const squares = this.state.squares.slice();

        // if no one won yet and button area is empty, skip
        // else return
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        // check if someone won the game on every click
        const winner = calculateWinner(squares);

        if (winner) {
            this.setState({
                squares: squares,
                status: 'Winner: ' + winner,
                isOver: true
            });
            
            this.showModal();
            
        } else {
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
                status: 'Next player: ' + (!this.state.xIsNext ? 'X' : 'O')
            });
        }
    }
    renderSquare = (i, isOver) => {
        return <Square next={this.state.xIsNext} order={this.state.squares[i]} over={this.state.isOver}
            onClick={() => this.handleClick(i)} />;
    }
    render = () => {
        return (
            <div>
                <div>
                    <div className="status">{this.state.status}</div>
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
                <Modal winner={this.state.xIsNext} visible={this.state.modalVisible}
                    onRestartClick={this.restartGame} onCloseClick={this.hideModal}>
                </Modal>
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

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}