import { Component } from '@angular/core';
import { F1Service } from '../services/f1-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [DatePipe]
})
export class Tab2Page {
  // selectedSegment = 'Rounds'; // define the selectedSegment property here
  events: any[];

  constructor(private f1Service: F1Service, private datePipe: DatePipe) {
    this.events = [];
  }

  // ngOnInit() {
  //   this.f1Service.getF1Events().subscribe(events => {
  //     this.events = events;
  //     console.log(this.events);
  //   });
  // }

  ngOnInit() {
    this.f1Service.getF1Events().subscribe((events: any[]) => {
      this.events = events.map((event: any) => {
        return {
          ...event,
          selectedSegment: 'Session' // Set the default selected segment to 'Rounds'
        };
      });
    });
  }

  formatTime(timestamp: string | null): string {
    if (timestamp) {
      const date = new Date(timestamp);
      date.setUTCHours(date.getUTCHours() + 7); // add 7 hours to convert from GMT to GMT+7
      const formattedTime = this.datePipe.transform(date, 'dd MMM yyyy - HH.mm');
      return formattedTime ? formattedTime : '';
    }
    return '';
  }
}