import React from 'react';

function TodoCard(props) {
    const {children, todoIndex, handleDeleteTodos, handleEditTodos} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodos(todoIndex)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={() => handleDeleteTodos(todoIndex)}>
                    <i className="fa-solid fa-trash"></i>
                </button>

            </div>
        </li>
    );
}

export default TodoCard;