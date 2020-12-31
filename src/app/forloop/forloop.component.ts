import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {


  constructor() { }
  arr = [1, 2, 3, 4];
  arrr = [
    { name: 'sham', age: 26, mark: 55 },
  { name: 'naynesh', age: 29, mark: 50 },
  { name: 'sarju', age: 20, mark: 66 }
]

  ngOnInit(): void {

  }

}
