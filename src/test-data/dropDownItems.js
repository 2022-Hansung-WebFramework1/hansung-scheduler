import { FilterType } from "types";

const dropDownItems = [
    {
        title: "교수",
        type: FilterType.PROFESSOR,
        value: 0,
        items: [
            { name: "박승현", value: 0 },
            { name: "한기준", value: 1 },
            { name: "정인환", value: 2 },
            { name: "김성동", value: 3 },
            { name: "조혜경", value: 4 },
        ]
    },
    {
        title: "강의실",
        type: FilterType.PLACE,
        value: 1,
        items: [
            { name: "미래관", value: 0 },
            { name: "공학관", value: 1 },
            { name: "탐구관", value: 2 },
            { name: "연구관", value: 3 }
        ]
    },
    {
        title: "학점",
        type: FilterType.CREDIT,
        value: 2,
        items: [
            { name: "1학점", value: 0 },
            { name: "2학점", value: 1 },
            { name: "3학점", value: 2 },
            { name: "4학점", value: 3 }
        ]
    }
]

export default dropDownItems;