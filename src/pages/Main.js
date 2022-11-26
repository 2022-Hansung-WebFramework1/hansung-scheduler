import React, { useEffect } from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import OrderDropDown from "components/OrderDropDown";
import FilterDropDown from "components/FilterDropDown";
import { useRecoilValue } from "recoil";
import { tagsState } from "states";

import styles from "assets/Main.module.css";
import CardGrid from "components/CardGrid";
import MyScheduler from 'components/MyScheduler';

const Main = () => {
    const tags = useRecoilValue(tagsState);

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    return (
        <div className={styles.container}>
            <div className={styles.calenderContainer}>
                {<MyScheduler />}
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.dropdownContainer}>
                    <OrderDropDown />
                    <FilterDropDown />
                </div>

                <div className={styles.tagContainer}>
                    <TagGroup tags={tags} />
                </div>

                {<Search />}

                <CardGrid />
            </div>
        </div>
    );
};

export default Main;