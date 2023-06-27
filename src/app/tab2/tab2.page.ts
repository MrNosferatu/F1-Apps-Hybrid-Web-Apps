import { Component } from '@angular/core';
import { F1Service } from '../services/f1-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  events: any[];

  constructor(private f1Service: F1Service) {
    this.events = [];
  }
  ngOnInit() {
    this.f1Service.getF1Events().subscribe(events => {
      this.events = events;
    });
  }
}