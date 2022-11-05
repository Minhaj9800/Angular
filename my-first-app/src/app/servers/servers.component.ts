import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers', // Select By element
  //selector: '[app-servers]',// To select by attribute
  //selector: '.app-servers', // Select By class
  //Note: Select by Id won't work in Angular
  //using inline template
  template: `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
