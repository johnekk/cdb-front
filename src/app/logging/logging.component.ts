import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {
  @Input()
  notLoggingPage: boolean;
  constructor() { }

  ngOnInit() {
  }

}
