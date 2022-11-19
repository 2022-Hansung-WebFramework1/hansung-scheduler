import React from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import { FilterType, OrderType } from "types";
import OrderDropDown from "components/OrderDropDown";

const tags = [
    {
        type: FilterType.FILTER,
        name: "공학관"
    },
    {
        type: FilterType.FILTER,
        name: "박승현"
    },
    {
        type: FilterType.ORDER,
        name: "시간순",
        order: OrderType.ASC
    }
]

const Main = () => {
    return (
        <div style={styles.container}>
            <OrderDropDown />
        </div>
    );
};

export default Main;

const styles = {
    container: {
        position: "absolute",
        zIndex: 999,
        paddingRight: "10%",
        paddingLeft: "10%"
    }
}