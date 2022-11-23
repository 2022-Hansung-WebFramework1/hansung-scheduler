import React from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import Card from "components/Card";
import CardGrid from "../components/CardGrid";

const Main = () => {
    return (
        <div style={styles.container}>
            <Search />
            <TagGroup tags={[{ type: "filter", name: "미래관" }, { type: "filter", name: "미래관" }]} />

            <CardGrid/>
        </div>
    );
};

export default Main;

const styles = {
    container: {
        width: "100%",
        position: "absolute",
        zIndex: 999,
        paddingRight: "10%",
        paddingLeft: "10%"
    }
}