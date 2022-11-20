import React, {useEffect, useRef, useState} from 'react';
import styles from 'assets/FilterDropDown.module.css';
import {FiChevronDown, FiChevronRight} from "react-icons/fi";

const dropDownItems = [
    {
        title: "교수",
        value: 0,
        items: [
            {name: "박승현", value: 0},
            {name: "한기준", value: 1},
            {name: "정인환", value: 2},
            {name: "김성동", value: 3},
            {name: "조혜경", value: 4},
        ]
    },
    {
        title: "강의실",
        value: 1,
        items: [
            {name: "미래관", value: 0},
            {name: "공학관", value: 1},
            {name: "탐구관", value: 2},
            {name: "연구관", value: 3}
        ]
    },
    {
        title: "학점",
        value: 2,
        items: [
            {name: "1학점", value: 0},
            {name: "2학점", value: 1},
            {name: "3학점", value: 2},
            {name: "4학점", value: 3}
        ]
    }
]

const FilterDropDown = () => {
    const [open, setOpen] = useState(false);
    const dropdownButtonRef = useRef(null);
    const dropdownRef = useRef(null);
    const [selected, setSelected] = useState([]);

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
        if (selected.length <= 0) {
            setSelected(Array(dropDownItems.length).fill(false));
        }
    }, []);

    useEffect(() => {
        console.log(selected);
    }, [selected]);


    return (
        <div>
            <div
                className={styles.container}
                ref={dropdownButtonRef}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <div style={{ marginRight: 6 }}>필터</div>
                <FiChevronDown />
            </div>
            {
                open ? (
                    <div className={styles.dropdownContainer} ref={dropdownRef}>
                        <div className={styles.dropdownTitle}>필터</div>

                        <div className={styles.dropdownItemContainer}>
                        {
                            dropDownItems.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.dropdownItem}
                                    >
                                        <div
                                            className={styles.dropdownItemTitle}
                                            onClick={() => {
                                                const newSelected = [...selected];
                                                newSelected[index] = !newSelected[index];
                                                setSelected(newSelected);
                                            }}
                                        >
                                            <div style={{rotate: selected[index] ? "90deg" : "0deg", transition: "all 0.2s"}}><FiChevronRight /></div>
                                            <div style={{ marginLeft: 10, fontWeight: 500 }}>{item.title}</div>
                                        </div>

                                        <div className={selected[index] ? styles.dropdownItemSubContainerSelected : styles.dropdownItemSubContainer}>
                                            {
                                                item.items.map((subItem, subIndex) => {
                                                    return (
                                                        <div key={subIndex} className={styles.dropdownItemSub}>
                                                            <input type="checkbox"/>
                                                            <div>{subItem.name}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
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

export default FilterDropDown;
