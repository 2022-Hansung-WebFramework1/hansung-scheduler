import React from 'react';
import { Link, Text } from "@nextui-org/react";

import SmoothBorder from "component/MainPage/SmoothBorder";
import styles from "asset/style/Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gnbMenuLeft}>
                <Link className={styles.title}>
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient: "90deg, $blue500 -20%, $pink500 50%",
                            marginLeft: "30px",
                            position: "relative",
                            zIndex: 3
                        }}
                    >
                        효율
                    </Text>
                </Link>
            </div>
            <div className={styles.gnbWrap}>
                <div className={styles.gnbMenuRight}>
                    <div className={styles.info}>
                        <SmoothBorder content={"김"} size={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;