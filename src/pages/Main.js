import React from 'react';
import styles from "assets/Main.module.css";
import MyScheduler from 'components/MyScheduler';

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.calenderContainer}>
                {<MyScheduler />}
            </div>
        </div>
    );
};

export default Main;