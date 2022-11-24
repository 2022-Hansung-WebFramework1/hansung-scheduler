import React from 'react';
import Tag from "component/MainPage/Tag";
import styles from "asset/style/TagGroup.module.css";

const TagGroup = ({ tags = [] }) => {
    return (
        <div className={styles.container}>
            {
                tags.map((tag, index) => {
                    return (
                        <Tag key={index} item={tag} />
                    )
                })
            }
        </div>
    );
};

export default TagGroup;