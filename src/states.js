import { atom } from "recoil";
import data from "data.json";

const dataHandling = () => {
    const _data = JSON.parse(JSON.stringify(data)).data;

    return _data.map(data => {return {...data, display: true}});
}

export const tagsState = atom({
    key: 'tagsState',
    default: []
});

export const itemsState = atom({
    key: 'itemsState',
    default: dataHandling()
})

export const searchState = atom({
    key: 'searchState',
    default: ""
})
