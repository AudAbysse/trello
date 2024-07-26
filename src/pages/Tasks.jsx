import React, { useContext, useEffect, useState } from 'react'
import { STATUS, TASKS } from '../utils/Data'
import Status from '../components/status/Status';
import { search, remove } from '../services/scrud';
import { ApplicationContext } from '../context/ApplicationContextProvider';


function Tasks() {

    const { state: { tasks }, updateTasks } = useContext(ApplicationContext);
    const getTasks = async () => {
        /* 
        const response = await search({ path: "tasks" });
        const data = await response.json(); */
        updateTasks(TASKS);
    };
    useEffect(() => {
        // async et await : appel asynchrone

        getTasks();
    }, []);
    const deleteTask = async (taskId) => {
        // setTasks(tasks.filter(task => task.id !== taskId));
        await remove({ path: `tasks/${taskId}` });
        getTasks();
    };
    return (
        <section className='container mx-auto flex gap-2'>
            {STATUS.map(status => <Status key={status} title={status} deleteTask={deleteTask} tasks={tasks} />)}
        </section>
    )
}

export default Tasks