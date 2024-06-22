import React from 'react';
import TodoCard from "./TodoCard.jsx";

function TodoList(props) {

    const {todos} = props;


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (<TodoCard {...props} todoIndex={todoIndex} key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>)
            })}

        </ul>
    );
}

export default TodoList;