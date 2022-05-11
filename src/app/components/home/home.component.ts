import { Component, Input, OnInit } from '@angular/core';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //These 3 components are obtained in the dictionary component. 
  enteredText="Example"; //Obtained from input box in Home component
  fromLang!: string; //Obtained from @Output in language component
  toLang!: string; //Obtained from @Output in language component
  response!: any; //Obtained from @Output in dictionary component

  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  //These handlers are for correctly setting the values obtained from the event emitters
  fromLanguageHandler(lang: string) {
    this.fromLang = lang; 
  }

  toLanguageHandler(lang: string) {
    this.toLang = lang;
  }

  responseHandler(ev: any) {
    this.response = ev;
  }

}
