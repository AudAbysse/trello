import React, { useContext } from 'react'
import { ApplicationContext } from '../../context/ApplicationContextProvider'

function TaskItem({ task, deleteTask }) {
    const { addToBasket } = useContext(ApplicationContext);
    return (
        <article className='bg-slate-100 p-2'>
            <h4>{task?.title}</h4>
            <div>{task?.description}</div>
            <p className='flex justify-between items-center'>
                <span>TI: {task.ti}</span>
                <span>TR: {task.tr}</span>
            </p>

            <button
                onClick={() => deleteTask(task.id)}
                type="button"
                className="flex delete-task"
            >
                Delete
            </button>
            <button type="button" onClick={() => addToBasket({ id: task.id })}>
                Ajouter au panier
            </button>

        </article >
    )
}

export default TaskItem