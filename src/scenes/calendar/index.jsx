import { useState } from "react";
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  // 2:34:20 link : https://www.youtube.com/watch?v=wYpCWwD1oz0&list=PLEYW3pZS6IQ_a-iYAno4VsZonrikphq8L
  const [currentEvent, setCurrentEvent] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calender;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete this event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header
        title="CALENDAR"
        subTitle="Full Calendar View and manage your events"
      />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR FOR EVENTS */}
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="5px"
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            <List>
              {currentEvent.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {
                          (formatDate(event.start,
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }))
                        }
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Typography>
          <List>
            {currentEvent.map((event) => (
              <ListItem key={event.id}>
                <ListItemText primary={event.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
