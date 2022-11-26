import React from 'react';
import { FiArrowUp } from "react-icons/fi";
import { TagType, OrderType } from "../types";
import { useRecoilState } from "recoil";
import { tagsState } from "states";
import styles from 'assets/Tag.module.css'

const Tag = ({ item }) => {
    const [tags, setTags] = useRecoilState(tagsState);

    if (item.type === TagType.FILTER) {
        return (
            <div className={styles.container}>
                {item.name}
            </div>
        )
    } else if (item.type === TagType.ORDER) {
        return (
            <div
                className={styles.container}
                onClick={() => {
                    const newTags = tags.map((tag) => {
                        if (tag.type === TagType.ORDER) {
                            return {
                                ...tag,
                                order: tag.order === OrderType.ASC ? OrderType.DESC : OrderType.ASC
                            }
                        }
                        return tag;
                    });
                    setTags(newTags);
                }}
            >
                <div>{item.name}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 4 }}>
                    {
                        <FiArrowUp style={{ rotate: item.order === OrderType.ASC ? "0deg" : "180deg", transition: "all 0.4s" }} />
                    }
                </div>
            </div>
        )
    } else if (item.type === TagType.TAG) {
        return (
            <div className={styles.container} style={{ width: "78px", height: "24px" }}>
                {item.name}
            </div>
        )
    }
};

export default Tag;