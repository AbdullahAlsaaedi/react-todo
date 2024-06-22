
import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";


function App() {
    let [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = React.useState('');


    function handleAddTodos(newTodo) {
        const newTodosList = [...todos, newTodo];
        setTodos(newTodosList);
        persistData(newTodosList);
    }

    function handleDeleteTodos(index) {
        const newTodosList = [...todos];

        setTodos(newTodosList.filter((val, ind) => ind !== index)); // Removes 1 element at index 2
        persistData(newTodosList);

    }

    function handleEditTodos(index) {
        const valueToEdit = todos[index];
        setInputValue(valueToEdit);
        handleDeleteTodos(index);

    }

    function persistData(newList) {
            localStorage.setItem('todos', JSON.stringify({todos: newList}));
            console.log(localStorage);
    }

    useEffect(() => {

        if(!localStorage) return;

        let localTodos = localStorage.getItem('todos');
        console.log(localTodos)


        if(!localTodos) {
            return;
        }

        localTodos = JSON.parse(localTodos).todos;
        console.log(localTodos)
        setTodos(localTodos);



    }, [])

  return (
    <>
        <TodoInput inputValue={inputValue} setInputValue={setInputValue}  handleAddTodos={handleAddTodos} todos={todos}/>
        <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}

export default App
