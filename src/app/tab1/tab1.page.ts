import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  readingObj: any;
  readingLevel: number;
  readingCode: string;
  new_state: number;
  new_start_date: string;
  confirmPageParams: any;
  reading: string;

  constructor(
    private router: Router,
  ) {}

  goToConfirmReading(event, reading) {
    console.log("Reading: "+ reading);
    // select correct reading
    switch (reading) {
      case "none": {
        this.readingLevel = 0;
        this.readingCode = "at0040";
        break;
      }
      case "happy": {
        this.readingLevel = 1;
        this.readingCode = "at0041";
        break;
      }
      case "indifferent": {
        this.readingLevel = 2;
        this.readingCode = "at0042";
        break;
      }
      case "unhappy": {
        this.readingLevel = 3;
        this.readingCode = "at0043";
        break;
      }

    }
    console.log("ReadingDone: "+ this.readingCode);
  }

}
