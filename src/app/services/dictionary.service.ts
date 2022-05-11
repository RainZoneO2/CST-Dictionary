import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { language } from '../models/language'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  //Api key for Yandex service
  yandexKey: string =
    'dict.1.1.20220508T235940Z.a2a39faf4b547bdf.1e582ae448779ba7a3d17410d18ebe9f5e104778'

  //Providing the url for the dictionary api
  apiURL =
    `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${this.yandexKey}&lang=en-ru&text=time`
  
  constructor(private http: HttpClient) {}
}
