import React, {useEffect} from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import OrderDropDown from "components/OrderDropDown";
import FilterDropDown from "components/FilterDropDown";
import {useRecoilValue} from "recoil";
import {tagsState} from "states";

import styles from "assets/Main.module.css";

const Main = () => {
    const tags = useRecoilValue(tagsState);

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    return (
        <div className={styles.container}>
            <TagGroup tags={tags} />
            <OrderDropDown />
            <FilterDropDown />
            <Search />
        </div>
    );
};

export default Main;