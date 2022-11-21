import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //inline styles
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,

    `
      /* app-servers {
        color: white;
      } */
    `,
  ],
})
export class AppComponent {
  //name = 'Minhaj';
}
