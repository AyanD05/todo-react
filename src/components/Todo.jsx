import React from 'react'
import './Todo.css'

function Todo({ task, onDelete }) {
    
    return (
        <div className="todo">
            <input type="checkbox" />
            <h3>{task}</h3>
            <button className="delete" onClick={onDelete}>
                X
            </button>
        </div>
    )
}

export default Todo