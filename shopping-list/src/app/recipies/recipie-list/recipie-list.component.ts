import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie(
      'A test recipie',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),

    new Recipie(
      'A test recipie',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
