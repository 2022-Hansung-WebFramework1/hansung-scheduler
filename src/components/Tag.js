import React from 'react';
import {FiArrowDown, FiArrowUp} from "react-icons/fi";
import { FilterType, OrderType } from "../types";

const Tag = ({ item }) => {
    if (item.type === FilterType.FILTER) {
        return (
            <div style={styles.container}>
                { item.name }
            </div>
        )
    } else if (item.type === FilterType.ORDER) {
        return (
            <div style={styles.container}>
                <div>{ item.name }</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 4 }}>
                    {
                        item.order === OrderType.DESC ?
                            <FiArrowDown /> :
                            <FiArrowUp />
                    }
                </div>
            </div>
        )
    }
};

export default Tag;

const styles = {
    container : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 88,
        height: 28,
        border: "1px solid #D9D9D9",
        borderRadius: 200,
        backgroundColor: "white",
        fontSize: 14,
        marginRight: 10
    }
}