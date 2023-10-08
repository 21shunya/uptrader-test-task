import React from 'react';
import styles from './TasksPage.module.scss';
import { taskList } from '../../utils/taskList';
import { StatusEnum } from '../../types/task';
import TaskColumn from '../../components/column/TaskColumn';
import Input from '../../components/ui/inputs/Input';

const TasksPage = () => {
    return (
        <div className={styles.wrapper}>
            <Input placeholder={'Поиск'} />
            <div className={styles.columns}>
                {Object.values(StatusEnum).map((status) =>
                    <TaskColumn key={status} tasks={taskList} status={status} />
                )}
            </div>
        </div>
    );
};

export default TasksPage;