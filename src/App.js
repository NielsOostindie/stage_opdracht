import React, { useState } from 'react';
import './App.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    function handleEdit(index) {
        setEditIndex(index);
        setEditValue(todos[index]);
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Todo List</h1>
            {/* Form for adding todos */}
            <form onSubmit={handleSubmit}>
                <input minLength="5" type='text' value={inputValue} onChange={handleChange}/>
                <button type="submit">Add Todo</button>
            </form>
            {/* List of todos */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{index === editIndex ? (
                        // If the todo is being edited, render an input field
                        <div>
                            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                            {/* Button to save the edited todo */}
                            <button onClick={() => {
                                const updatedTodos = [...todos];
                                updatedTodos[index] = editValue;
                                setTodos(updatedTodos);
                                setEditIndex(null);
                            }}>Save</button>
                        </div>
                    ) : (
                        // If the todo is not being edited, render the todo text and buttons
                        <div>
                            {todo}
                            {/* Button to delete the todo */}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            {/* Button to edit the todo */}
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </div>
                    )}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
//test dit
