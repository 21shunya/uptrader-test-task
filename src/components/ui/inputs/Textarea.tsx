import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.scss'

type TextareaProps = DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>;

const Textarea = ({ ...pops }: TextareaProps) => {
    return (
        <textarea {...pops} className={styles.input} />
    );
};

export default Textarea;