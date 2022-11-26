import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from 'data/today-appointments';

const MyScheduler = () => (
    <Paper>
        <Scheduler data={appointments} >
            <WeekView startDayHour={9} endDayHour={19} />
            <Appointments />
        </Scheduler>
    </Paper>
);

export default MyScheduler;