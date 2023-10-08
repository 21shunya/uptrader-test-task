import React from 'react';
import styles from './TaskPriority.module.scss'
import cn from 'classnames';
import { Task } from '../../../types/task';

const TaskPriority = ({ priority }: Pick<Task, 'priority'>) => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.ellipse, styles[priority])} />
            {priority}
        </div>
    );
};

export default TaskPriority;