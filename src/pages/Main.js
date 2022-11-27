import React, { useEffect, useState } from 'react';
import Search from "components/Search";
import TagGroup from "components/TagGroup";
import OrderDropDown from "components/OrderDropDown";
import FilterDropDown from "components/FilterDropDown";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {itemsState, tagsState} from "states";

import styles from "assets/Main.module.css";
import CardGrid from "components/CardGrid";
import MyScheduler from 'components/MyScheduler';
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, sortableKeyboardCoordinates} from "@dnd-kit/sortable";

const Main = () => {
    const [activeId, setActiveId] = useState(null);
    const setItems = useSetRecoilState(itemsState);
    const tags = useRecoilValue(tagsState);

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );
    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        setActiveId(null);
        const { active, over } = event;

        if (active !== over) {
            setItems((items) => {
                console.log(active, over);
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
        >
            <div className={styles.container}>
                <div className={styles.calenderContainer}>
                    {<MyScheduler />}
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.dropdownContainer}>
                        <OrderDropDown />
                        <FilterDropDown />
                    </div>

                    <div className={styles.tagContainer}>
                        <TagGroup tags={tags} />
                    </div>

                    {<Search />}

                    <CardGrid />
                </div>
            </div>
        </DndContext>
    );
};

export default Main;