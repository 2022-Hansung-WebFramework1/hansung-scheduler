import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from 'test-data/today-appointments';

import { DragDropProvider } from '@devexpress/dx-react-scheduler-material-ui';

const MyScheduler = () => (
    <Paper>
        <Scheduler data={appointments} firstDayOfWeek={1}>
            <WeekView startDayHour={9} endDayHour={19} />
            <Appointments />
        </Scheduler>
    </Paper>
);

export default MyScheduler;