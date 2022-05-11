import { Component, Input, OnInit } from '@angular/core';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enteredText="Example";
  fromLang!: string;
  toLang!: string;

  constructor() { }
  ngOnInit(): void {
  }

}
