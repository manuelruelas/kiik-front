import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {
  items:any[];
  constructor() { }

  ngOnInit() {
    this.items = Array.from({length:50}).map((_, i) => `Item #${i}`);
  }

}
