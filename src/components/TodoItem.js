import React from 'react';


function TodoItem(props) {
    
    const completedItem = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)} 
                />
            <p style={props.todo.completed ? completedItem : null}>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;