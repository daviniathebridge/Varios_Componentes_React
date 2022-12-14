
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment"
import 'moment/locale/es';
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";



const localizer = momentLocalizer(moment)


const locales = {
    "es": require("date-fns/locale/es"),

};
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

const events = [
    {
        title: "Mi evento",
        allDay: true,
        start: new Date(2022, 11, 0),
        end: new Date(2022, 11, 0),
    },
    {
        title: "Vacation",
        start: new Date(2022, 11, 7),
        end: new Date(2022, 11, 10),
    },
    {
        title: "Conference",
        start: new Date(2022, 11, 20),
        end: new Date(2022, 11, 23),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            /*
                console.log(d1 <= d2);
                console.log(d2 <= d3);
                console.log(d1 <= d4);
                console.log(d4 <= d3);
                  */

            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("CLASH");
                break;
            }

        }


        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">

            <h1>Calendario</h1>
            <h2>Nuevo Evento</h2>
            <div>
                <input type="text" placeholder="Titulo" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Fecha de comienzo" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="Fecha de fin" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Nuevo Evento
                </button>

            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400, margin: "40px" }} />
            <Button variant="light" className="buttons" type="buttonHomme" size="lg" ><Nav.Link href="/buttons" variant="info">Back</Nav.Link>{' '}

            </Button>
        </div>
    );
}

export default App;




