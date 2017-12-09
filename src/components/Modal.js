import React from 'react';
import '../modal.css'

export default class Modal extends React.Component {
    render() {
        let visibility = this.props.visible ? "block" : "none";

        return (
            <div className="modal-window" style={{ display: visibility }}>
                <div>
                    <a onClick={this.props.onCloseClick} title="Close" className="modal-close">Close</a>
                    <h1>{this.props.winner ? 'X' : 'O'} wins!</h1>
                    <a className="btn" onClick={this.props.onRestartClick}>Restart</a>
                </div>
            </div>
        );
    }
}