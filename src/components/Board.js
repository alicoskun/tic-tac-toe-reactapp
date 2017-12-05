import React from 'react';
import Square from './Square';
import Modal from './Modal';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            modalVisible: false
        };
    }
    restartGame = () => {
        this.setState({
            squares: this.state.squares.fill(null),
            xIsNext: true,
            modalVisible: false
        });
    }
    showModal = () => {
        console.log('showModal');
        this.setState({
            modalVisible: true
        });
    }
    closeModal = () => {
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
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare = (i, isOver) => {
        return <Square next={this.state.xIsNext} order={this.state.squares[i]} over={isOver}
            onClick={() => this.handleClick(i)} />;
    }
    render = () => {
        const winner = calculateWinner(this.state.squares);
        let status;
        let isOver = false;

        if (winner) {
            status = 'Winner: ' + winner;
            isOver = true;
            //this.showModal();
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0, isOver)}
                        {this.renderSquare(1, isOver)}
                        {this.renderSquare(2, isOver)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3, isOver)}
                        {this.renderSquare(4, isOver)}
                        {this.renderSquare(5, isOver)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6, isOver)}
                        {this.renderSquare(7, isOver)}
                        {this.renderSquare(8, isOver)}
                    </div>
                    <span>tic tac toe</span>
                </div>
                <Modal title="Restart" visible={this.state.modalVisible}
                    onRestartClick={this.restartGame} onCloseClick={this.closeModal}>
                    <span>Would you like to restart the game?</span>
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