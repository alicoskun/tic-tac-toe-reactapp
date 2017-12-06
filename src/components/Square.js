import React from 'react';

export default class Square extends React.Component {
    
    shouldComponentUpdate = (nextProps) => {
        // default order value is null
        // order is set 'X' or 'O' when button clicked
        // if it changes, update it
        return this.props.order !== nextProps.order;
    }
    render = () => {

        let buttonClass = 'square';
        let nextUserClass = 'next-user';
        let nextUser = this.props.next ? 'X' : 'O';

        if (this.props.order === 'X') {
            buttonClass += ' square-x-user';
            nextUserClass = 'hidden';
        }
        else if (this.props.order === 'O') {
            buttonClass += ' square-o-user';
            nextUserClass = 'hidden';
        }

        if (this.props.over) {
            nextUserClass = 'hidden';
        }

        return (
            <button className={buttonClass} onClick={this.props.onClick}>
                <span>{this.props.order}</span>
                <div className={nextUserClass}>
                    <span>{nextUser}</span>
                </div>
            </button>
        );
    }
}
// // functional component
// export default function Square(props) {

//     let buttonClass = 'square';
//     let nextUserClass = 'next-user';
//     let nextUser = props.next ? 'X' : 'O';

//     if (props.order === 'X') {
//         buttonClass += ' square-x-user';
//         nextUserClass = 'hidden';
//     }
//     else if (props.order === 'O') {
//         buttonClass += ' square-o-user';
//         nextUserClass = 'hidden';
//     }

//     if (props.over) {
//         nextUserClass = 'hidden';
//     }

//     return (
//         <button className={buttonClass} onClick={props.onClick}>
//             <span>{props.order}</span>
//             <div className={nextUserClass}>
//                 <span>{nextUser}</span>
//             </div>
//         </button>
//     );
// }
