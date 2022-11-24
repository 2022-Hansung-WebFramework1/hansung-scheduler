import bigList from "../test-data/bigList";
import { FixedSizeGrid } from "react-window";

const CardTable = () => {
    const dataList = bigList
    let columnCount = 4;

    const Cell = ({ columnIndex, rowIndex, style }) => (
        <div style={{
            ...style, ...{
                display: "flex",
            }
        }}>
            <img style={{}}
                 src={dataList[rowIndex * columnCount + columnIndex].avatar}
                 alt={dataList[rowIndex * columnCount + columnIndex].name}
            />
            <p style={{ width: window.innerWidth / columnCount }}>
                {dataList[rowIndex * columnCount + columnIndex].name}<br />
                {dataList[rowIndex * columnCount + columnIndex].email}
            </p>
        </div>
    );

    return (
        <FixedSizeGrid
            height={(window.innerHeight - 20)}
            width={(window.innerWidth - 20)}
            columnCount={columnCount}
            rowCount={dataList.length}
            columnWidth={window.innerWidth / columnCount}
            rowHeight={80}
        >
            {Cell}
        </FixedSizeGrid >
    );
}

export default CardTable;