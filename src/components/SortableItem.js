import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Card from "components/Card";

export const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? "100" : "auto",
        opacity: isDragging ? 0.3 : 1
    };

    return (
        <div ref={setNodeRef} style={style}>
            <Card
                title={props.item.kwamokname}
                className={props.item.bunban}
                tags={[`${props.item.hakjum}학점`, props.item.juya]}
                professor={props.item.prof.join(", ")}
                classroom={props.item.classroom}
                day={props.item.day}
                startTime={new Date(`2022-01-01T${props.item.startTime}:00`)}
                endTime={new Date(`2022-01-01T${props.item.endTime}:00`)}
                attributes={attributes}
                listeners={listeners}
            />
        </div>
    );
}