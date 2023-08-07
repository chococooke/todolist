import React, { useState } from "react";
import { CheckSquare, Square, Trash } from "react-feather";

const Task = ({ task, onDelete }) => {
    const [complete, setComplete] = useState(false);

    const markComplete = () => {
        setComplete(!complete);
    };

    return (
        <div className="task">
            <button className="task__btn" onClick={markComplete}>
                {!complete ? <Square /> : <CheckSquare />}
            </button>
            <p className="task-body" style={complete ? { textDecoration: "line-through" } : {}}>
                {task}
            </p>
            <button className="task__btn" onClick={onDelete}>
                <Trash />
            </button>
        </div>
    );
};

export default Task;
