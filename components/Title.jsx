import React from 'react';
import styles from '/components/Title.module.scss';

export default function Title(props) {
    
    return (
        <h1 className={styles.h1}><i></i> {props.name}</h1>
    );
}