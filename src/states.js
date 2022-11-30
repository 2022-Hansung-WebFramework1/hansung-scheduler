import { atom } from "recoil";
import data from "data.json";
import {StatusType} from "types";

const dataHandling = () => {
    const _data = JSON.parse(JSON.stringify(data)).data;
    return _data.map(data => {return {...data, status: StatusType.SHOWEN}});
}

export const tagsState = atom({
    key: 'tagsState',
    default: []
});

export const itemsState = atom({
    key: 'itemsState',
    default: dataHandling()
});