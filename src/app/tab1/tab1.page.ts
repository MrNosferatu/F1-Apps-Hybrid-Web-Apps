import { Component } from '@angular/core';
import { F1Service } from '../services/f1-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  f1Teams: any[];

  constructor(private f1Service: F1Service) {
    this.f1Teams = [];
  }

  ngOnInit() {
    this.f1Service.getF1Teams().subscribe((data: any) => {
      console.log(data);
      this.f1Teams = data.teams;
    });
  }
}