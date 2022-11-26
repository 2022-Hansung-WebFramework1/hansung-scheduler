import bigList from "../data/bigList";
import { FixedSizeGrid } from "react-window";

const CardTable = () => {
    const dataList = bigList

    const Cell = ({ columnIndex, rowIndex, style }) => (
        <div style={{ ...style, ...{ display: "flex", whiteSpace: "pre-wrap" } }}>
            <img
                src={dataList[rowIndex * 4 + columnIndex].avatar}
                alt={dataList[rowIndex * 4 + columnIndex].name}
                width={50}
            />
            <p>{dataList[rowIndex * 4 + columnIndex].name} - {dataList[rowIndex * 4 + columnIndex].email}</p>
        </div>
    );

    return (
        <FixedSizeGrid
            height={(window.innerHeight - 20)}
            width={(window.innerWidth - 20)}
            columnCount={4}
            rowCount={dataList.length}
            columnWidth={(window.innerHeight) / 2}
            rowHeight={80}
        >
            {Cell}
        </FixedSizeGrid >
    );
}

export default CardTable;