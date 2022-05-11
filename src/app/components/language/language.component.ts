import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Observable, Subscriber } from 'rxjs'
import { language } from 'src/app/models/language'
import { TranslationService } from 'src/app/services/translation.service'

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {
  Language: any = [] //Parsed and sorted languages obtained from parseLanguages()
  LanguagePair: any = [] //Language pair obtained from loadLanguages()
  @Output() optionEmitter = new EventEmitter<string>(); //This is the output field that the home component can see
  selectedLang!: any; //This is the selected language

  constructor(private restApi: TranslationService) {}
  ngOnInit(): void {
    this.loadLanguages() //We call loadLanguages() here.
  }

  loadLanguages() {
    return this.restApi.getLanguagePairs().subscribe((data: any) => { //Subscribing to the observable for our api
      this.LanguagePair = data //Setting the data to the LanguagePair array
      this.parseLanguages()
      /**
       * The reason we called parseLanguages() here because getLanguagePairs() has an observable
       * meaning it can be completed at a later time. So calling parseLanguages() here is an simple fix.
       **/
    })
  }

  parseLanguages() {
    for (var pair of this.LanguagePair) { //This gets every pair in LanguagePair array
      var temp = pair.split('-') //We split every pair and assign it to temp
      if (!this.Language.includes(temp[1]))
        //Check if the Language array doesn't already contain language
        this.Language.push(temp[1]) //Push it inside of Language array
    }
    this.Language.sort((a: string, b: string) => a.localeCompare(b)) //We sort the Language array alphabetically here
  }

  selectChangeHandler(event: any) {
    this.selectedLang = event.target.value //This sets the selectedLang to the value of the selection from our select component in the template
    this.optionEmitter.emit(this.selectedLang) //This actually emits the data so it can be used in Home component 
    //console.log(this.optionEmitter.toString())
  }
}
