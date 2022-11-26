import React, {useEffect, useState} from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors, DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove, rectSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import {SortableItem} from 'components/SortableItem';

import styles from "assets/CardGrid.module.css";
import data from "data.json";

const CardGrid = () => {
    const [activeId, setActiveId] = useState(null);
    const [items, setItems] = useState(JSON.parse(JSON.stringify(data)).data);
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
                const oldIndex = items.findIndex((item) => item.id == active.id);
                const newIndex = items.findIndex((item) => item.id == over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    useEffect(() => {
        console.log(items);
    }, []);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
        >
            <div className={styles.container}>
                <SortableContext
                    items={items}
                    strategy={rectSortingStrategy}
                >
                    {
                        items.map((item) => {
                            return (
                                <SortableItem
                                    key={item.id}
                                    id={item.id}
                                    item={item}
                                />
                            )
                        })}
                </SortableContext>
            </div>

        </DndContext>
    );
}

export default CardGrid;