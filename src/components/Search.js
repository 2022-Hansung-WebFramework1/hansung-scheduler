import React, { useRef } from 'react';
import { FiSearch } from "react-icons/fi";
import styles from "assets/Search.module.css";

import { useRecoilState } from "recoil";
import { searchState } from "states";

const Search = () => {
    const inputRef = useRef("");
    const [search, setSearch] = useRecoilState(searchState);
    return (
        <div className={styles.container}>
            <input ref={inputRef} type={"text"} className={styles.input} />
            <FiSearch size={24} color={"#252525"} onClick={() => {
                setSearch(inputRef.current.value); console.log(search);
            }} />
        </div>
    );
};

export default Search;