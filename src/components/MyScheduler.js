import React, { useCallback, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { EditingState, IntegratedEditing, ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Appointments,
    AppointmentTooltip,
    WeekView
} from '@devexpress/dx-react-scheduler-material-ui';

import { useDroppable } from "@dnd-kit/core";
import { useRecoilState } from "recoil";
import { itemsState } from "../states";
import moment from "moment";
import { StatusType } from "../types";

const convertDay = ["일", "월", "화", "수", "목", "금", "토"]

const MyScheduler = (props) => {
    const { id } = props;
    const [items, setItems] = useRecoilState(itemsState);
    const [data, setData] = useState()

    const { isOver, setNodeRef } = useDroppable({
        id: id ?? "schedule",
    });

    const style = {
        zIndex: isOver ? "100" : "auto",
        opacity: isOver ? 0.9 : 1,
    };

    const commitChanges = ({ added, changed, deleted }) => {
        // console.log(added,changed,deleted);
        if (deleted !== undefined) {
            console.log(deleted);
            setItems(prev => {
                return prev.map(item => {
                    if (item.id == deleted) {
                        return {
                            ...item,
                            status: StatusType.SHOWEN
                        }
                    } else {
                        return {
                            ...item
                        }
                    }
                })
            })
        }
        return { data };
    }

    const dataHandle = useCallback(() => {
        console.log("dataHandle");
        const currentDate = moment();
        let newItems = items.filter(item => item.status === StatusType.DRAGGED);
        // console.log("currentDate", currentDate.startOf('week').add('days', convertDay.indexOf("월")).toDate());
        newItems = newItems.map((item) => {
            const date = currentDate.startOf('week').add('days', convertDay.indexOf(item.day));
            const dateISOString = date.format().split("T")[0];
            console.log("dateISOString", dateISOString)
            const startDate = new Date(`${dateISOString}T${item.startTime}:00`);
            const endDate = new Date(`${dateISOString}T${item.endTime}:00`)
            return {
                ...item,
                title: item.kwamokname,
                location: item.classroom,
                startDate: startDate,
                endDate: endDate
            }
        });

        setData(newItems);

    }, [JSON.stringify(items)]);

    useEffect(() => {
        dataHandle()
    }, [JSON.stringify(items)])

    useEffect(() => {
        console.log("data", data);
    }, [data])

    return (
        <div ref={setNodeRef} style={style}>
            <Paper>
                <Scheduler
                    data={data}
                    firstDayOfWeek={1}
                    locale='ko-KO'
                >
                    <ViewState currentDate={window.currentDate} />

                    <EditingState onCommitChanges={commitChanges} />
                    <IntegratedEditing />

                    <WeekView
                        startDayHour={9} // 시작 시각
                        endDayHour={23} // 종료 시각
                        excludedDays={[0, 6]} // 제외할 요일(0:일,월,화,수,목,금,6:토)
                        cellDuration={30} // 시간 간격
                    />

                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        showDeleteButton
                    />
                </Scheduler>
            </Paper>
        </div >

    )
}


export default MyScheduler;