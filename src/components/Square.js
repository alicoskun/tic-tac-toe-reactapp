import React from 'react';

// functional component
export default function Square(props) {

    let buttonClass = 'square';
    let nextUserClass = 'next-user';
    let nextUser = props.next ? 'X' : 'O';

    if (props.order === 'X') {
        buttonClass += ' square-x-user';
        nextUserClass = 'hidden';
    }
    else if (props.order === 'O') {
        buttonClass += ' square-o-user';
        nextUserClass = 'hidden';
    }

    if (props.over) {
        nextUserClass = 'hidden';
    }

    return (
        <button className={buttonClass} onClick={props.onClick}>
            <span>{props.order}</span>
            <div className={nextUserClass}>
                <span>{nextUser}</span>
            </div>
        </button>
    );
}