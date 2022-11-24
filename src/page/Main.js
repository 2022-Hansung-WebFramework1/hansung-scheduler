import styles from "asset/style/Main.module.css";

import CardTable from 'component/CardTable';
import bigList from 'test-data/bigList';

import MyScheduler from 'component/MyScheduler';
import Nav from 'component/Section/Nav';

const Main = () => {


    return (
        <div>
            <div><Nav /></div>

            <div className={styles.MyScheduler}><MyScheduler /></div>
            <div className={styles.CardTable}><CardTable data={bigList} /></div>
        </div>
    );
};

export default Main;