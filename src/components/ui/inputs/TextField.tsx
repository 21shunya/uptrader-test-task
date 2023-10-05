import React, { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Input.module.scss'

interface TextFieldProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string;
}

const TextField = ({ children, label, ...props }: TextFieldProps) => {
    return (
        <div {...props} className={styles.textField}>
            <label>{label}</label>
            {children}
        </div>
    );
};

export default TextField;