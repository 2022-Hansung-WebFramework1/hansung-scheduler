import React from 'react';
import {
     rectSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import {SortableItem} from 'components/SortableItem';

import styles from "assets/CardGrid.module.css";
import {itemsState} from "states";
import {useRecoilValue} from "recoil";

const CardGrid = () => {

    const items = useRecoilValue(itemsState);


    return (

            <div className={styles.container}>
                <SortableContext
                    items={items}
                    strategy={rectSortingStrategy}
                >
                    {
                        items.map((item) => {
                            if(item.display) {
                                return (
                                    <SortableItem
                                        key={`item-${item.id}`}
                                        id={item.id}
                                        item={item}
                                    />
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </SortableContext>
            </div>

    );
}

export default CardGrid;