import React, { useEffect } from 'react';

import { useRecoilValue } from "recoil";
import { tagsState } from 'states';

import styles from "asset/style/Main.module.css";

import Search from "component/MainPage/Search";
import TagGroup from "component/MainPage/TagGroup";
import OrderDropDown from "component/MainPage/OrderDropDown";
import FilterDropDown from "component/MainPage/FilterDropDown";



const Nav = () => {
    const tags = useRecoilValue(tagsState);

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    return (
        <div class={styles.container}>
            <TagGroup tags={tags} />
            <OrderDropDown />
            <FilterDropDown />
            <Search />
        </div>
    );


}

export default Nav;