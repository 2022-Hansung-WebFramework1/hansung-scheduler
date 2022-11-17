import React from 'react';

const Tag = ({ item }) => {
    if (item.type === 'filter') {
        return (
            <div style={styles.container}>
                { item.name }
            </div>
        )
    } else {
        return (
            <div style={styles.tag}>
                { item.name }
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
    },
    tag : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 64,
        height: 22,
        border: "1px solid #D9D9D9",
        borderRadius: 200,
        backgroundColor: "white",
        fontSize: 11,
        marginRight: 10
    }
}