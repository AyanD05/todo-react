import React from 'react'
import './Todo.css'
function TodoForm({ onAddTask }) {
    const addTask = (e) => {
        e.preventDefault()
        const taskInput = e.target.elements.task.value
        if (taskInput.trim()) {
            onAddTask(taskInput)
            e.target.elements.task.value = ''
        }
    }
    return (
        <form className="todo" onSubmit={addTask}>
            <input type="text" placeholder="Enter a new task" className="task" name="task"/>
            <button className='addtaskbutton' type="submit">✔</button>
        </form>
    )
}

export default TodoForm