import styles from './TaskCard.module.scss'
import DateRow from './dateRow/DateRow';
import H6 from '../ui/h6/H6';
import commentsIcon from './comments.svg'
import TaskAddition from './taskAdditon/TaskAddition';
const TaskCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span>
                    <H6>#3</H6>
                    <H6>Заголовок</H6>
                </span>
            </div>
            description
            <div className={styles.dates}>
                <DateRow title={'title'} date={'12.12.12'} />
                <DateRow title={'title'} date={'12.12.12'} />
                <DateRow title={'title'} date={'12.12.12'} />
            </div>
            <div className={styles.addition}>
                <TaskAddition icon={commentsIcon} count={3} />
                <TaskAddition icon={commentsIcon} count={3} />
                <TaskAddition icon={commentsIcon} count={3} />
            </div>
        </div>
    )
}

export default TaskCard;