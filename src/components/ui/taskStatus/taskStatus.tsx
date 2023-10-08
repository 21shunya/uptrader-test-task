import React from 'react';
import styles from './taskStatus.module.scss'
import { Task } from '../../../types/task';
import H6 from '../h6/H6';
import cn from 'classnames';

interface TaskStatusProps extends Pick<Task, 'status'>{
    taskCount?: number;
}

const TaskStatus = ({ status, taskCount }: TaskStatusProps) => {
    return (
        <div className={cn(styles.wrapper, styles[status.toLowerCase()])}>
            <H6>{status}</H6>
            {taskCount &&
                <H6>{taskCount}</H6>
            }
        </div>
    );
};

export default TaskStatus;