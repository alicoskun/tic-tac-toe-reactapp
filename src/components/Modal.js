import React from 'react';

export default class Modal extends React.Component {
    render() {        
        let visibility = this.props.visible ? "block" : "none";

        return (
            <div className="modal-window" style={{display: visibility}}>
                <a href="#modal-close" title="Close" className="modal-close">Close</a>
                <h1>{this.props.title}</h1>
                <div>
                    <button onClick={this.props.onRestartClick}>Restart</button>
                </div>
            </div>
        );
    }
}