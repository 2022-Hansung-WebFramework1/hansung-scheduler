import {atom} from "recoil";
import {FilterType, OrderType} from "./types";

export const tagsState = atom({
    key: 'tagsState',
    default: [
        {
            type: FilterType.FILTER,
            name: "공학관"
        },
        {
            type: FilterType.FILTER,
            name: "박승현"
        },
        {
            type: FilterType.ORDER,
            name: "시간순",
            order: OrderType.ASC
        }
    ]
});