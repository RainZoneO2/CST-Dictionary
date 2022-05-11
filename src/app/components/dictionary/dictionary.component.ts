import { Component, OnInit, Input } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  @Input() enteredText!: string;
  @Input() fromLang!: string;
  @Input() toLang!: string;


  constructor(private restApi : DictionaryService) { }

  ngOnInit(): void {
     this.restApi.getDictEntry().subscribe((data: any) => {
      //this.smth = data
    })
  }

}
