import React from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";

const Main = () => {
    return (
        <div style={styles.container}>
            <Search />
            <TagGroup tags={[{ type: "filter", name: "미래관" }, { type: "filter", name: "미래관" }]} />
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