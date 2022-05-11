import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { map } from 'rxjs/operators'
import { DictEntry } from '../models/dict-entry'

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  //Api key for Yandex service
  yandexKey: string =
    'dict.1.1.20220508T235940Z.a2a39faf4b547bdf.1e582ae448779ba7a3d17410d18ebe9f5e104778'

  //Endpoint for Yandex dictionary lookup service
  baseApiUrl =
    `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${this.yandexKey}`
  
  constructor(private http: HttpClient) {}

  getDictEntry(lang:string = "en-en", text:string = "example"): Observable<DictEntry> {
    return this.http.get(`${this.baseApiUrl}&lang=${lang}&text=${text}`).pipe(
      //Sends observables returned by the http.get() to error handler
      map((resp) => <DictEntry>resp),
      retry(1), //Retries failed request up to 1 time
      catchError(this.handleError), //Then handles the error
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error,
      )
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.'),
    )
  }
}
