import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1Service } from '../services/f1-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-f1-drivers',
  templateUrl: './f1-drivers.page.html',
  styleUrls: ['./f1-drivers.page.scss'],
})
export class F1DriversPage implements OnInit {
  name = '';
  driverDetails: any;

  constructor(private route: ActivatedRoute, private f1Service: F1Service, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.f1Service.getF1DriverDetails(this.name).subscribe((data: any) => {
        this.driverDetails = data.player.filter((item: any) => item.strSport === "Motorsport");
      });
    });

  }
  goBack() {
    this.location.back();
  }
}