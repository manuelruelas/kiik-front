import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  items = Array.from({length:50}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
