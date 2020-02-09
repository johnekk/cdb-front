import { Component, OnInit } from '@angular/core';
import {LOCALE_ID, Inject } from '@angular/core'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languageList = [
    { code: 'en', label: 'English', src: "../../../assets/img/en.png" }, 
    { code: 'fr', label: 'Francais', src: "../../../assets/img/fr.png" }
  ];  

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
  }

}
