import React from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import Card from "components/Card";

const Main = () => {
    return (
        <div style={styles.container}>
            <Search />
            <TagGroup tags={[{ type: "filter", name: "미래관" }, { type: "filter", name: "미래관" }]} />
            <Card
                title={"테스트"}
                className={"N"}
                tags={["3학점", "야간"]}
                professor={"박승현"}
                classroom={"공학관 309"}
                day={"수"}
                startTime={new Date('2022-11-16T18:00:00')}
                endTime={new Date('2022-11-16T19:30:00')}
            />
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