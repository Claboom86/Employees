import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.css'

const List = ({ data = [] }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.id}>ID</div>
      <div className={styles.name}>Name</div>
      <div className={styles.salary}>Salary</div>
      <div className={styles.age}>Age</div>
    </div>
    {
      data.map((listItem, index) => (
        <ListItem key={index} {...listItem}/>
      ))
    }
  </div >
);

export default List;