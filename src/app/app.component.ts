import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'kazakh-site';
  language:any;

  constructor(public translate:TranslateService){
    translate.addLangs(['ru', 'kk']);
    let lang = localStorage.getItem('lang');
    if(!lang){
      lang = 'kk';
    }

    localStorage.setItem('lang',lang);
    this.translate.currentLang = lang;
    this.translate.setDefaultLang(lang);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(translate.currentLang);
      localStorage.setItem('lang', translate.currentLang);
    });
  }
}
