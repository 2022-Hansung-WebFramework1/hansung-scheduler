import React, {useEffect, useRef, useState} from 'react';
import styles from 'assets/OrderDropDown.module.css'
import {FiCheck, FiChevronDown} from "react-icons/fi";

const dropDownItems = [
    {
        name: "시간순",
        engName: "time",
        value: 0
    },
    {
        name: "학점순",
        engName: "credit",
        value: 1
    },
    {
        name: "평가순",
        engName: "star",
        value: 2
    }
]

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

    useEffect(() => {
        if (open && selected.value !== -1) {
            dropdownItemRef.current[selected.value].className = styles.dropdownItemSelected;
        }
    }, [open]);

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
                    <div className={styles.dropdownContainer} ref={dropdownRef}>
                        <div className={styles.dropdownTitle}>정렬</div>

                        <div className={styles.dropdownItemContainer}>
                            {
                                dropDownItems.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={styles.dropdownItem}
                                            onClick={(event) => {
                                                // 자신이 아닌 다른 아이템들의 style을 초기화
                                                dropdownItemRef.current.forEach((item) => {
                                                    if (item !== event.target) {
                                                        item.className = styles.dropdownItem;
                                                    }
                                                });
                                                setSelected({name: item.engName, value: index});
                                                dropdownItemRef.current[index].className = styles.dropdownItemSelected;
                                            }}
                                            onMouseOver={(event) => {
                                                dropdownItemRef.current.forEach((item) => {
                                                    if (item !== event.target) {
                                                        item.className = styles.dropdownItem;
                                                    }
                                                });
                                                dropdownItemRef.current[index].className = styles.dropdownItemHover;
                                            }}
                                            onMouseOut={() => {
                                                for (let i = 0; i < dropdownItemRef.current.length; i++) {
                                                    if (selected.value !== i) {
                                                        dropdownItemRef.current[i].className = styles.dropdownItem;
                                                    }
                                                }
                                                if (selected.value !== -1) {
                                                    dropdownItemRef.current[selected.value].className = styles.dropdownItemSelected;
                                                }
                                            }}
                                            ref={ref => dropdownItemRef.current[index] = ref}
                                        >
                                            <div>{item.name}</div>
                                            {selected.name === item.engName && <FiCheck />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default OrderDropDown;
