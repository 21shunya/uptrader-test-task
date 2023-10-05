import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss'

type InputProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Input = ({ ...props }: InputProps) => {
    return (
        <input {...props} className={styles.input} />
    );
};

export default Input;