import { Component, ElementRef, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { interval } from 'rxjs';

export interface myTile {
  style: object;
  cols: number;
  rows: number;
  text: string;
  flag: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //properties
  n: number = 0;
  subjectArray = ["Science Olympaid", "Mathematics Olympiad", "English Olympiad", "Cyber Olympiad", "Grads Olympiad", "Finance Olympiad"];
  imageArray = ["Science", "Maths", "English", "Cyber", "Grads", "Finance"];
  colorArray = ["#EF4037", "#FCD015", "#F7931E", "#D19046", "#149588", "#22B573"];

  temp:string = "Science";
  currentSubject:string = this.subjectArray[this.n];
  currentImage:string = "../../assets/" +this.temp+ ".png";
  currentColor:string = this.colorArray[this.n];

  logo = "logo.jpg";

  //body of register as an institute
  regIns = "Want to give a headstart to the students of your institute by providing them an exciting platform to test their knowledge and skills. Then, get your Institute registered with us now!";

  //body of register as a coordinator
  regCo = "Grab the opportunity and get a chance to work in the education sector with one of the renowned education service providers with the option to work full time or part time. Work as a mediator between education institutes and us and Earn a handsome amount of money by working at your convenience. Top coordinators will be given to work as full-time employees with good pay.";

  //about springfield olympiads
  about = "We, at Springfield Olympiads, provide one of the best Olympiad solutions for students and working professionals and students.Springfield Olympiads is an Educational Organization popularizing academic competition and assisting the development of competitive spirit among learners.";

  copyrights = "Copyright © 2021. All Rights Reserved. No part of this site including content and/or logo may be copied and/or used in any manner without the prior written consent of"

  public blankStyle = {
    backgroundColor: "white",
  }

  public keyStyle = {
    cursor: "pointer",
    color: "#00C496",
  }

  followtiles: myTile[] = [
    {text: '', cols: 5, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Follow us:', cols: 2, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Facebook', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: ':', cols: 1, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Linkedin', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: ':', cols: 1, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Instagram', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: '', cols: 5, rows: 1, style: this.blankStyle, flag: false},
  ]

  contacttiles: myTile[] = [
    {text: '', cols: 5, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Contact us:', cols: 2, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Whatsapp', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: ':', cols: 1, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Mail', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: ':', cols: 1, rows: 1, style: this.blankStyle, flag: false},
    {text: 'Message', cols: 2, rows: 1, style: this.keyStyle, flag: false},
    {text: '', cols: 5, rows: 1, style: this.blankStyle, flag: false},
  ]

  copyrightTiles: myTile[] = [
    {text: this.copyrights, cols: 9, rows: 1, style: this.blankStyle, flag: false},
    {text: '', cols: 1, rows: 2, style: this.blankStyle, flag: true},
    {text: 'SPRINGFIELD OLYMPIADS PRIVATE LIMITED', cols: 9, rows: 1, style: this.blankStyle, flag: false},
  ]

  cardTile: myTile[] = [
    {text: this.copyrights, cols: 9, rows: 1, style: this.blankStyle, flag: false},
  ]

  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
  
  ngOnInit(): void {
    const number= interval(3000);
    number.subscribe((d: number) => {
      this.n =  d % this.subjectArray.length;

      this.currentSubject = this.subjectArray[this.n];
      this.currentColor = this.colorArray[this.n];
      this.temp = this.imageArray[this.n];
      this.currentImage = "../../assets/" +this.temp+ ".png";
    }
    )
  }

  changeBanner() {

  }
}
