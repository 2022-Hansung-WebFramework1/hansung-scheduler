import {atom} from "recoil";
import data from "data.json";

export const tagsState = atom({
    key: 'tagsState',
    default: []
});

export const itemsState = atom({
    key: 'itemsState',
    default: JSON.parse(JSON.stringify(data)).data
})
