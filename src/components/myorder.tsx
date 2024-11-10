import React from 'react';
import styles from './MyOrderButton.module.css';

const MyOrderButton: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
        <span className={styles.notificationDot}></span>
    <button className={styles.button}>
      <span className={styles.my}>My</span> 
      <span className={styles.order}>Order</span>
    </button>
    </div>
  );
};

export default MyOrderButton;
