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
export class TranslationService {
  //Api key for Yandex service
  yandexKey: string =
    'dict.1.1.20220508T235940Z.a2a39faf4b547bdf.1e582ae448779ba7a3d17410d18ebe9f5e104778'

  //Endpoint for getting list of languages
  langApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/getLangs?key=${this.yandexKey}`

  constructor(private http: HttpClient) {}

  getLanguagePairs(): Observable<language[]> {
    return this.http.get(`${this.langApiUrl}`).pipe(
      //Sends observables returned by the http.get() to error handler
      map((resp) => <language[]>resp),
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
