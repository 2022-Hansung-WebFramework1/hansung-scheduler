import React, { useState } from 'react';
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
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from 'component/SortableItem';

const CardGrid = () => {
    const [activeId, setActiveId] = useState(null);
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

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
            <div style={styles.gridContainer}>
                <SortableContext
                    items={items}
                    strategy={rectSortingStrategy}
                >
                    {items.map(id => <SortableItem key={id} id={id} />)}

                </SortableContext>
            </div>

        </DndContext>
    );
}

const styles = {
    gridContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    }
}

export default CardGrid;