import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers', // Select By element
  //selector: '[app-servers]',// To select by attribute
  //selector: '.app-servers', // Select By class
  //Note: Select by Id won't work in Angular
  //using inline template
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  isEmpty = false;
  username = 'TestUser';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    if (this.username !== '') {
      this.isEmpty = true;
    }
  }

  ngOnInit(): void { }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }

  outputServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }

  onClickAction() {
    if (this.username !== '') {
      this.username = '';
    }
  }
}
