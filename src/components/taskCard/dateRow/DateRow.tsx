import styles from './DateRow.module.scss'

interface DateRowProps {
    title: string;
    date: string;
}
const DateRow = ({ title, date }: DateRowProps) => {
    return (
        <div className={styles.wrapper}>
            <span>{title}:</span>
            <span>{date}</span>
        </div>
    )
}

export default DateRow;