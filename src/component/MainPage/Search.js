import React, { useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import styles from "asset/style/Search.module.css";

const Search = () => {
    const inputRef = useRef("");
    return (
        <div className={styles.container}>
            <input ref={inputRef} type={"text"} className={styles.input} />
            <FiSearch size={24} color={"#252525"} onClick={() => console.log(inputRef.current.value)} />
        </div>
    );
};

export default Search;