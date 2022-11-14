import React from 'react';
import Search from "components/Search";

const Main = () => {
    return (
        <div style={styles.container}>
            <Search />
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