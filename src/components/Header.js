import React from 'react';
import { Text } from "@nextui-org/react";

import SmoothBorder from "components/SmoothBorder";

const Header = () => {
    return (
        <div style={styles.container}>
            <div style={styles.gnbMenuLeft}>
                <a style={styles.title}>
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient: "90deg, $blue500 -20%, $pink500 50%",
                            marginLeft: "30px",
                            position: "relative",
                            zIndex: 999
                        }}
                    >
                        효율
                    </Text>
                </a>
            </div>
            <div style={styles.gnbWrap}>
                <div style={styles.gnbMenuRight}>
                    <div className="info">
                        <SmoothBorder content={"김"} size={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        display: "flex",
        justifyContent: "center"
    },
    gnbWrap: {
        display: "flex",
        alignSelf: "center"
    },
    gnbMenuRight: {
        marginRight: "8vw"
    },
    gnbMenuLeft: {
        marginLeft: "8vw"
    },
    info: {
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
    }
}