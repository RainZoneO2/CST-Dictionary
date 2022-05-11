import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationService } from './services/translation.service';
import { LanguageComponent } from './components/language/language.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DictionaryService } from './services/dictionary.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    DictionaryComponent,
  ],
  imports: [
    BrowserModule,
    //Import for HttpClientModule -> For API calls
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    TranslationService,
    DictionaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
