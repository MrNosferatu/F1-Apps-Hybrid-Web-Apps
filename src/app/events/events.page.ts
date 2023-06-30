import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1Service } from '../services/f1-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  event = '';
  Title = '';
  EventDetails: any;
  constructor(private route: ActivatedRoute, private f1Service: F1Service, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.event = params['event'];
      this.f1Service.getF1EventDetails(this.event).subscribe((data: any) => {
        this.EventDetails = data.results;
        if (data.results != null) {
          this.Title = this.EventDetails[1].strEvent + " Results";
        } else {
          this.Title = "No Data Available";
        }
      });
    });
  }
  goBack() {
    this.location.back();
  }
}