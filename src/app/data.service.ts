import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public initialSlide = new BehaviorSubject<any>(0);

  constructor() { }

  showInitialSlide(initialSlide){
    this.initialSlide.next(initialSlide);
    localStorage.setItem('slide',initialSlide);
  }
}
