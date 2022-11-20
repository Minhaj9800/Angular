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
  username = 'TestUser';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void { }
  
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }

  outputServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }

  onClickAction() {
    this.username = '';
  }
}

// NOTE (DIRECTIVES):
// Directives are the instructions in the DOM.Components
// are such instructions in DOM. Once we place the selector of our component
// somewhere in our templates, at this point of time we are instructing angular
// to add the content of our component template, and the business logic in our
// types of code in this place where we place the selector.
// [Angular please add our component at this place].
// Components are directives with template
// There are directives without template
// We typically add directive with attribute selector
// But technically selector of directive can be 
// configured just like the selector of component.
// So you could use css classes or the element style.
// but again typically you use the attribute style.