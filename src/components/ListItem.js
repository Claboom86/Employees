import React from 'react';
import styles from './ListItem.module.css'

const ListItem = ({ id, employee_name, employee_salary, employee_age }) => (
    <div className={styles.container}>
        <div className={styles.id}>{id}</div>
        <div className={styles.name}>{employee_name}</div>
        <div className={styles.salary}>{employee_salary}</div>
        <div className={styles.age}>{employee_age}</div>
    </div>);

export default ListItem;