import { Component } from '@angular/core';
import { F1Service } from '../services/f1-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  F1Driver: any[];

  constructor(private f1Service: F1Service) {
    this.F1Driver = [];
  }

  ngOnInit() {
    this.f1Service.getF1Driver().subscribe((data: any) => {
      console.log(data);
      this.F1Driver = data.flatMap((item: any) => item.player).filter((player: any) => player !== null && player.strSport === 'Motorsport');
      console.log(this.F1Driver);
    });
  }
}