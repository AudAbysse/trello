import React, { useContext } from 'react'
import TaskItem from '../task-item/TaskItem'
import { ApplicationContext } from '../../context/ApplicationContextProvider';

function Status({ title, deleteTask }) {
    const { state: { tasks = [] } } = useContext(ApplicationContext);
    return (
        <div>
            <h3 className='mb-2'>{title}</h3>
            <div className='flex flex-col gap-3'>
                {tasks
                    .filter(task => task.status === title)
                    .map(task => <TaskItem key={task.id} task={task} deleteTask={deleteTask} />)}
            </div>
        </div>
    )
}

export default Status
