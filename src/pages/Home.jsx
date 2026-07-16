import React from 'react'
import './Home.css'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import { useState } from 'react'
function Home() {

    const [tasks, setTasks] = useState(['Learn HTML']) 
    const [addTaskModal,setAddTaskModal] = useState(false)
    const addTask = () => {
        // Render TodoForm component when the button is clicked
        setAddTaskModal(true)

    }
    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask])
        setAddTaskModal(false)
    }
    return (
        <div className="home">
            <h1>My Todo App</h1>

            {tasks.map((task, index) => (
                <Todo key={index} task={task} onDelete={() => setTasks(tasks.filter((_, i) => i !== index))} />
            ))}
            {addTaskModal && <TodoForm onAddTask={handleAddTask}/>}
            <button onClick={addTask} className='add-task'>Add Task</button>
        </div>
    )
}

export default Home