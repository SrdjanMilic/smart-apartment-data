import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Search } from '../models/search.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly result = new BehaviorSubject<Search>({ term: '', searchEngine: ''});

  constructor(private router: Router) { }

  getSearchValues(): Observable<Search> {
    return this.result.asObservable();
  }

  setSearchValues(object: Search): void {
    this.result.next(object);
  }

  redirect() {
    if (this.result.getValue().searchEngine === 'google') {
      this.router.navigate(['google-results']);
    } else {
      this.router.navigate(['bing-results']);
    }
  }
}
