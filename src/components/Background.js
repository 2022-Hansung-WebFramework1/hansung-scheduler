import React from 'react';

const Background = () => {
    return (
        <div style={{ position: "relative" }}>
            <div style={styles.background1} />
            <div style={styles.background2} />
        </div>
    );
};

export default Background;


const styles = {
    background1: {
        width: "120vw",
        height: "100vh",
        backgroundColor: "#002870",
        borderRadius: "400vmax / 130vmax",
        rotate: "20deg",
        position: "relative",
        left: "-14vw",
        boxShadow: "rgba(100, 100, 111, 1) 0px 7px 29px 0px",
        zIndex: 1
    },
    background2: {
        width: "120vw",
        height: "100vh",
        backgroundColor: "#DDF6FF",
        borderRadius: "400vmax / 130vmax",
        rotate: "-20deg",
        position: "absolute",
        left: "-14vw",
        top: "58vh",
    }
}