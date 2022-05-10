import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { language } from 'src/app/models/language';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-language',
  template:`<div> 
              <select>
                <option *ngFor='let language in languages'>{{language}}</option>
              </select>
            </div>`,
  //templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  constructor(private service: TranslationService) { }

  ngOnInit(): void {
    this.service.getLanguagePairs()
    .subscribe(languages => this.languages = languages);
  }
  languages: Observable<language[]>;

}
