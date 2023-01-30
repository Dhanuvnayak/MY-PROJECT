import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoggerService } from 'my-logger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'frontend';
//  loggerService:any;

constructor(private loggerService:LoggerService){
  this.loggerService.log('Hello world');

}


 }



