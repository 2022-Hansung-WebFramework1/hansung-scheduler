import { useRecoilValue } from "recoil";
import { tagsState } from "states";


const getOrderedAndFilteredItems = (oldItems, setItems) => {

    const tags = useRecoilValue(tagsState);

    let newItems = oldItems;
    console.log(newItems);
    return null;
}

// 

