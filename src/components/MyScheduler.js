import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {EditingState, IntegratedEditing, ViewState} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    WeekView
} from '@devexpress/dx-react-scheduler-material-ui';

import { DragDropProvider } from '@devexpress/dx-react-scheduler-material-ui';
import {useDroppable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {useRecoilState} from "recoil";
import {itemsState} from "../states";
import {useCallback, useEffect, useState} from "react";
import moment from "moment";
import {StatusType} from "../types";

const convertDay = ["월", "화", "수", "목", "금", "토", "일"]

const MyScheduler = (props) => {
    const {id} = props;
    const [items, setItems] = useRecoilState(itemsState);
    const [data, setData] = useState()

    const {isOver, setNodeRef} = useDroppable({
        id: id ?? "schedule",
    });

    const style = {
        zIndex: isOver ? "100" : "auto",
        opacity: isOver ? 0.9 : 1
    };

    const commitChanges = ({ added, changed, deleted }) => {
        // console.log(added,changed,deleted);
        // if (deleted !== undefined) {
        //     data = data.filter(appointment => appointment.id !== deleted);
        // }
        // return { data };
    }

    const makeTodayAppointment = useCallback((startDate, endDate, currentDate, date) => {
        const days = moment(startDate).diff(endDate, 'days');
        const nextStartDate = moment(startDate)
            .year(currentDate.year())
            .month(currentDate.month())
            .date(date);
        const nextEndDate = moment(endDate)
            .year(currentDate.year())
            .month(currentDate.month())
            .date(date + days);

        return {
            startDate: nextStartDate.toDate(),
            endDate: nextEndDate.toDate(),
        };
    },[]);



    const dataHandle = useCallback(() => {
        const currentDate = moment();
        let newItems = items.filter(item => item.status === StatusType.DRAGGED);

        newItems = newItems.map((item) => {
            const date = currentDate.startOf('week').add('days', convertDay.indexOf(item.day));
            const dateISOString = date.toISOString().split("T")[0];
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

    },[items]);

    useEffect(() => {
        dataHandle()
    },[items])

    useEffect(() => {
        console.log("data", data);
    },[data])

    return (
        <div ref={setNodeRef} style={style}>
            <Paper>
                <Scheduler
                    data={data}
                    firstDayOfWeek={1}
                    locale='ko-KO'
                >

                    <ViewState
                        currentDate={window.currentDate}
                    />

                    <EditingState
                        onCommitChanges={commitChanges}
                    />
                    <IntegratedEditing />

                    <WeekView
                        startDayHour={9} endDayHour={21}
                        excludedDays={[0,6]}
                    />

                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        showDeleteButton
                    />
                </Scheduler>
            </Paper>
        </div>

    )
}



export default MyScheduler;