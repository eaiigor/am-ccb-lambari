import { Component, OnInit } from '@angular/core';
import { eventsData } from 'src/app/data/events.data';
import { EventosData } from 'src/app/interfaces/eventosData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  eventosData: EventosData[] = [];
  
  ngOnInit(): void {
    this.eventosData = eventsData;
  }

}
