import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  //properties
  public subject = "Maths Olympiad";
  constructor() { }

  ngOnInit(): void {
  }

}
