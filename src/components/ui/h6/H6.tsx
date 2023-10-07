import React, { BaseHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './H6.module.scss'

type HProps = DetailedHTMLProps<BaseHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const H6 = ({ ...props }: HProps) => {
    return (
        <h6 {...props} className={styles.h} />
    );
};

export default H6;