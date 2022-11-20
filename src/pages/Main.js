import React from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import OrderDropDown from "components/OrderDropDown";
import FilterDropDown from "components/FilterDropDown";
import {useRecoilValue} from "recoil";
import {tagsState} from "states";

const Main = () => {
    const tags = useRecoilValue(tagsState);

    return (
        <div style={styles.container}>
            <TagGroup tags={tags} />
            <OrderDropDown />
            <FilterDropDown />
        </div>
    );
};

export default Main;

const styles = {
    container: {
        position: "absolute",
        zIndex: 999,
        paddingRight: "10%",
        paddingLeft: "10%",
        display: "flex",
        flexDirection: "row",
    }
}