import React from 'react';
import Tag from "components/Tag";
import styles from "assets/TagGroup.module.css";

const TagGroup = ({ tags=[] }) => {
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