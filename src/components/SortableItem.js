import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Card from "./Card";

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? "100" : "auto",
        opacity: isDragging ? 0.3 : 1
    };

    return (
        <div ref={setNodeRef} style={style}>
            <Card
                title={"테스트"}
                className={"N"}
                tags={["3학점", "야간"]}
                professor={"박승현"}
                classroom={"공학관 309"}
                day={"수"}
                startTime={new Date('2022-11-16T18:00:00')}
                endTime={new Date('2022-11-16T19:30:00')}
                attributes={attributes}
                listeners={listeners}
            />
        </div>
    );
}