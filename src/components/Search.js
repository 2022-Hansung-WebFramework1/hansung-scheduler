import React, { useRef } from 'react';
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const inputRef = useRef("");
    return (
        <div style={styles.container}>
            <input ref={inputRef} type={"text"} style={styles.input} />
            <FiSearch size={24} color={"#D9D9D9"} onClick={() => console.log(inputRef.current.value)} />
        </div>
    );
};

export default Search;

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 40,
        backgroundColor: "white",
        border: "1px solid #D9D9D9",
        borderRadius: 200,
        paddingRight: "5%",
        paddingLeft: "5%",
    },
    input: {
        border: "none",
        borderRadius: 200,
        width: "80%"
    }
}