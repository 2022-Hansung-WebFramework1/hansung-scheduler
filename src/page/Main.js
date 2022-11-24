import styles from "asset/style/Main.module.css";

import MyScheduler from 'component/MyScheduler';

import CardGrid from "component/CardGrid";


const Main = () => {
    return (
        <div>
            <div className={styles.MyScheduler}><MyScheduler /></div>
            <CardGrid />
        </div>
    );
};

export default Main;