import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Plus } from "react-feather";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [formData, setFormData] = useState({ task: "" });

    const updateFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addTask = (e) => {
        e.preventDefault();

        setTasks([...tasks, formData]);
        setFormData({ task: "" }); // Clear the form after adding the task
    };

    const deleteTask = (taskIndex) => {
        const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <>
            <div className="tasks">
                <form className="form">
                    <input
                        className="form__input"
                        type="text"
                        placeholder="task"
                        name="task"
                        value={formData.task}
                        onChange={updateFormData}
                    />
                    <button className="form__btn" onClick={addTask}><Plus /></button>
                </form>
                {tasks.map((task, index) => (
                    <Task key={index} task={task.task} onDelete={() => deleteTask(index)} />
                ))}
            </div>
        </>
    );
};

export default Tasks;
