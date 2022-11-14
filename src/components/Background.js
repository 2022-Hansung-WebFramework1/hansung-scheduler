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
        width: "116rem",
        height: "40rem",
        backgroundColor: "#002870",
        borderRadius: "400rem / 140rem",
        rotate: "20deg",
        position: "relative",
        top: "-4rem",
        left: "-12rem",
        boxShadow: "rgba(100, 100, 111, 1) 0px 7px 29px 0px",
        zIndex: 1
    },
    background2: {
        width: "116rem",
        height: "40rem",
        backgroundColor: "#DDF6FF",
        borderRadius: "400rem / 140rem",
        rotate: "-20deg",
        position: "absolute",
        left: "-12rem",
        top: "28rem",
    }
}