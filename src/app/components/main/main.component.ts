import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    locales: allLocales,
    locale: 'pt-br',
    events: [
      {
        title: 'Meeting',
        start: '2024-02-12T14:30:00',
        extendedProps: {
          status: 'done'
        }
      },
      {
        title: 'Birthday Party',
        start: '2024-03-13T07:00:00',
        backgroundColor: 'green',
        borderColor: 'green'
      }
    ],
  };
}
