import React from 'react';

function TodoInput(props) {
    const {handleAddTodos, inputValue, setInputValue} = props;

    function addTodo() {
        handleAddTodos(inputValue);
        setInputValue('')
    }
    return (
        <header>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter todo..."/>
            <button onClick={addTodo}>Add</button>
        </header>
    );
}

export default TodoInput;