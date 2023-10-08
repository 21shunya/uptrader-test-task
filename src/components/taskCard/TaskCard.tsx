import styles from './TaskCard.module.scss'
import DateRow from './dateRow/DateRow';
import H6 from '../ui/h6/H6';
import commentsIcon from './comments.svg';
import subtaskIcon from './subtasks.svg';
import fileIcon from './files.svg';
import TaskAddition from './taskAdditon/TaskAddition';
import { Task } from '../../types/task';
import TaskPriority from './taskPriority/TaskPriority';

const TaskCard = (
    { id, title, description, priority, dateStart, dateEnd, inWork, subTasks, comments, files }: Task
) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <TaskPriority priority={priority} />
                <span>
                    <H6>№{id}</H6>
                    <H6>{title}</H6>
                </span>
            </div>
            {description}
            <div className={styles.dates}>
                <DateRow title={'Создание'} date={dateStart} />
                <DateRow title={'В работе'} date={inWork} />
                <DateRow title={'Окончание'} date={dateEnd} />
            </div>
            <div className={styles.addition}>
                <TaskAddition icon={subtaskIcon} count={subTasks.length} />
                <TaskAddition icon={commentsIcon} count={comments.length} />
                <TaskAddition icon={fileIcon} count={files.length} />
            </div>
        </div>
    )
}

export default TaskCard;