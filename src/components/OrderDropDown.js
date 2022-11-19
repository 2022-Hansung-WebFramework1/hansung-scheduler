import React, {useEffect, useRef, useState} from 'react';
import styles from 'assets/OrderDropDown.module.css'
import {FiCheck, FiChevronDown} from "react-icons/fi";

const OrderDropDown = () => {
    const [open, setOpen] = useState(false);
    const dropdownButtonRef = useRef(null);
    const dropdownRef = useRef(null);
    const dropdownItemRef = useRef([]);
    const [selected, setSelected] = useState({name: "", value: -1});

    // dropdown 외부 클릭 시 닫히도록
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                if (dropdownButtonRef.current && dropdownButtonRef.current.contains(event.target)) {
                    return;
                }
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div>
            <div
                className={styles.container}
                ref={dropdownButtonRef}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <div style={{ marginRight: 6 }}>정렬</div>
                <FiChevronDown />
            </div>
            {
                open ? (
                    <div className={open ? styles.dropdownContainer : null} ref={dropdownRef}>
                        <div className={styles.dropdownTitle}>정렬</div>

                        <div className={styles.dropdownItemContainer}>
                            <div
                                className={styles.dropdownItem}
                                onClick={(event) => {
                                    // 자신이 아닌 다른 아이템들의 style을 초기화
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    setSelected({name: 'time', value: 0});
                                    dropdownItemRef.current[0].className = styles.dropdownItemSelected;
                                }}
                                onMouseOver={(event) => {
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    dropdownItemRef.current[0].className = styles.dropdownItemHover;
                                }}
                                onMouseOut={() => {
                                    for (let i = 0; i < dropdownItemRef.current.length; i++) {
                                        if (selected.value !== i) {
                                            dropdownItemRef.current[i].className = styles.dropdownItem;
                                        }
                                    }
                                    dropdownItemRef.current[selected.value].className = styles.dropdownItemSelected;
                                }}
                                ref={ref => dropdownItemRef.current[0] = ref}
                            >
                                <div>시간순</div>
                                {selected.name === 'time' && <FiCheck />}
                            </div>
                            <div
                                className={styles.dropdownItem}
                                onClick={(event) => {
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    setSelected({name: 'credit', value: 1});
                                    dropdownItemRef.current[1].className = styles.dropdownItemSelected;
                                }}
                                onMouseOver={(event) => {
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    dropdownItemRef.current[1].className = styles.dropdownItemHover;
                                }}
                                onMouseOut={() => {
                                    for (let i = 0; i < dropdownItemRef.current.length; i++) {
                                        if (selected.value !== i) {
                                            dropdownItemRef.current[i].className = styles.dropdownItem;
                                        }
                                    }
                                    dropdownItemRef.current[selected.value].className = styles.dropdownItemSelected;
                                }}
                                ref={ref => dropdownItemRef.current[1] = ref}
                            >
                                <div>학점순</div>
                                {selected.name === 'credit' && <FiCheck />}
                            </div>
                            <div
                                className={styles.dropdownItem}
                                onClick={(event) => {
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    setSelected({name: 'star', value: 2});
                                    dropdownItemRef.current[2].className = styles.dropdownItemSelected;
                                }}
                                onMouseOver={(event) => {
                                    dropdownItemRef.current.forEach((item) => {
                                        if (item !== event.target) {
                                            item.className = styles.dropdownItem;
                                        }
                                    });
                                    dropdownItemRef.current[2].className = styles.dropdownItemHover;
                                }}
                                onMouseOut={() => {
                                    for (let i = 0; i < dropdownItemRef.current.length; i++) {
                                        if (selected.value !== i) {
                                            dropdownItemRef.current[i].className = styles.dropdownItem;
                                        }
                                    }
                                    dropdownItemRef.current[selected.value].className = styles.dropdownItemSelected;
                                }}
                                ref={ref => dropdownItemRef.current[2] = ref}
                            >
                                <div>평가순</div>
                                {selected.name === 'star' && <FiCheck />}
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default OrderDropDown;
