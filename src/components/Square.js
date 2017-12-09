import React from 'react';

export default class Square extends React.Component {    
    render = () => {
        let buttonClass = 'square';
        let nextUserClass = 'next-user';

        // set user color and hide next user hover
        if (this.props.order === 'X') {
            buttonClass += ' square-x-user';
            nextUserClass = 'hidden';
        }
        else if (this.props.order === 'O') {
            buttonClass += ' square-o-user';
            nextUserClass = 'hidden';
        }
        
        // hide next user hovers
        if (this.props.over) {
            nextUserClass = 'hidden';
        }

        return (
            <button className={buttonClass} onClick={this.props.onClick}>
                <span>{this.props.order}</span>
                <div className={nextUserClass}>
                    <span>{this.props.next ? 'X' : 'O'}</span>
                </div>
            </button>
        );
    }
}