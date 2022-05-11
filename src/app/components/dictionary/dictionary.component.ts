import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  //These 3 fields are input properties that are obtained from the Home Component
  @Input() enteredText!: string; 
  @Input() fromLang!: string;
  @Input() toLang!: string;
  //This is the EventEmitter for exposing the response to the parent class "Home"
  @Output() responseEmitter = new EventEmitter<string>(); 
  response!: any;

  constructor(private restApi : DictionaryService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void { //Overriding onChanges so that the search is called as the word is being typed
    this.search() 
  }

  search() {
    if ((this.fromLang !== undefined) && (this.toLang !== undefined)) { //Checks that both the sourch and target languages are set before calling the api
      return this.restApi.getDictEntry(`${this.fromLang}-${this.toLang}`, this.enteredText).subscribe((data: any) => { //Subscribing to the observable for our api, and using the 3 fields above to call api properly
        this.response = data //Sets the response var to the data obtained
        this.responseEmitter.emit(this.response) //Emites that data (exposes to parent class "Home")
      })
    }
    return
  }

  

}
