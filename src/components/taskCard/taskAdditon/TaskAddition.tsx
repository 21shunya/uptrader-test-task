import React from 'react';
import styles from './TaskAddition.module.scss'

interface TaskAdditionProps {
    icon: string;
    count: number;
}

const TaskAddition = ({ icon, count }: TaskAdditionProps) => {
    return (
        <div className={styles.wrapper}>
            <img src={icon} alt={''}/>
            {count}
        </div>
    );
};

export default TaskAddition;