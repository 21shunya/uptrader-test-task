import React from 'react';
import styles from './TaskColumn.module.scss';
import TaskStatus from '../ui/taskStatus/taskStatus';
import { StatusEnum, Task } from '../../types/task';
import TaskCard from '../taskCard/TaskCard';
import { ReactComponent as AddIcon} from './add.svg';

interface TaskColumnProps {
    tasks: Task[];
    status: StatusEnum;
}

const TaskColumn = ({ tasks, status }: TaskColumnProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <TaskStatus status={status}/>
                <button>
                    <AddIcon />
                    Add
                </button>
            </div>
            {tasks.map((task) =>
                <TaskCard key={task.id} {...task} />
            )}
        </div>
    );
};

export default TaskColumn;