import React from 'react';
import Tag from "components/Tag";

const TagGroup = ({ tags=[] }) => {
    return (
        <div style={styles.container}>
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

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}