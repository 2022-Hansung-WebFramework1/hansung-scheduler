import React from 'react';
import styles from "asset/style/Background.module.css";

const Background = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background1} />
            <div className={styles.background2} />
        </div>
    );
};

export default Background;