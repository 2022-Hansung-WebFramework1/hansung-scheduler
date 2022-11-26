
import { atom } from "recoil";
import data from "data.json";

export const tagsState = atom({
    key: 'tagsState',
    default: []
});